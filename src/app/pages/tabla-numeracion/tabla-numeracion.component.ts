import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';

//importante
import { TablaNumeracion } from 'src/app/model/tabla-numeracion';
import { TablaNumeracionService } from 'src/app/services/tabla-numeracion.service';
import { ModalTabNumComponent } from './modal-tab-num/modal-tab-num.component';

@Component({
  selector: 'app-tabla-numeracion',
  templateUrl: './tabla-numeracion.component.html',
  styleUrls: ['./tabla-numeracion.component.css']
})
export class TablaNumeracionComponent implements OnInit {

  displayedColumns = ['idmedico', 'nombres', 'apellidos', 'cmp', 'acciones'];
  dataSource: MatTableDataSource<TablaNumeracion>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private tablaNumeracionService: TablaNumeracionService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.tablaNumeracionService.gettabNumCambio().subscribe(data => {
      this.crearTabla(data);
    });
    
    this.tablaNumeracionService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });
    
    this.tablaNumeracionService.listar().subscribe(data => {
      console.log(data)
      this.crearTabla(data);
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  crearTabla(data: TablaNumeracion[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(tablaNumeracion?: TablaNumeracion) {
    this.dialog.open(ModalTabNumComponent, {
      width: '250px',
      data: tablaNumeracion
    });
  }

  eliminar(tablaNumeracion: TablaNumeracion) {
    this.tablaNumeracionService.eliminar(tablaNumeracion.nl_nume).pipe(switchMap(() => {
      return this.tablaNumeracionService.listar();
    }))
      .subscribe(data => {
        this.tablaNumeracionService.setMensajeCambio("SE ELIMINO");
        this.tablaNumeracionService.settabNumCambio(data);
      });
  }



}
