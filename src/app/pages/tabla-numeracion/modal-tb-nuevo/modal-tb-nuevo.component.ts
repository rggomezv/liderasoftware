import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';


import { TablaNumeracion } from 'src/app/model/tabla-numeracion';
import { TablaNumeracionService } from 'src/app/services/tabla-numeracion.service';

@Component({
  selector: 'app-modal-tb-nuevo',
  templateUrl: './modal-tb-nuevo.component.html',
  styleUrls: ['./modal-tb-nuevo.component.css']
})
export class ModalTbNuevoComponent implements OnInit {

  datosNuevos: TablaNumeracion;
  datosNuevos2: TablaNumeracion;
  date: Date = new Date();

  constructor(
    private dialogRef: MatDialogRef<ModalTbNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TablaNumeracion,
    private servivio: TablaNumeracionService
  ) { }

  ngOnInit(): void {
    this.datosNuevos = { ...this.data };
    console.log( this.datosNuevos)
    // this.datosNuevos2 = { ...this.data['secundario'] };
    // console.log(this.datosNuevos)
  }

  operar() {
    // if (this.datosNuevos != null && this.datosNuevos[0] > 0) {
    //   //MODIFICAR
    //   this.servivio.modificar(this.datosNuevos).pipe(switchMap(() => {
    //     return this.servivio.listar();
    //   }))
    //     .subscribe(data => {
    //       this.servivio.settabNumCambio(data);
    //       this.servivio.setMensajeCambio("SE MODIFICO");
    //     });

    // } else {
      //REGISTRAR
      this.servivio.registrar(this.datosNuevos).subscribe(() => {
        this.servivio.listar().subscribe(data => {
          this.servivio.settabNumCambio(data);
          this.servivio.setMensajeCambio("SE REGISTRO");
        });
      });
    // }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }

}
