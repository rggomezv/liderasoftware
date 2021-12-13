import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  constructor(
    protected http: HttpClient,
    @Inject("url") protected url: string
  ) { }

  listar(){
    return this.http.get<T[]>(this.url);
  }

  listarPorId(id1: string, id2: string, id3: string) {
    return this.http.get<T>(`${this.url}/${id1}/${id2}/${id3}`);
  }
  listarPorPK(id: number) {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  registrar(t: T) {
    return this.http.post(this.url, t);
  }

  modificar(t: T) {
    return this.http.put(this.url, t);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
