import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';


import { TablaNumeracion } from 'src/app/model/tabla-numeracion';
import { TablaNumeracionService } from 'src/app/services/tabla-numeracion.service';

// import { TablaNumeracion } from 'src/app/model/tabla-numeracion';

@Component({
  selector: 'app-modal-tab-num',
  templateUrl: './modal-tab-num.component.html',
  styleUrls: ['./modal-tab-num.component.css']
})
export class ModalTabNumComponent implements OnInit {

  datosNuevos: TablaNumeracion;
  datosNuevos2: TablaNumeracion;
  date: Date = new Date();
  datosReg:TablaNumeracion;

  constructor(
    private dialogRef: MatDialogRef<ModalTabNumComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TablaNumeracion,
    private servivio: TablaNumeracionService
  ) { }

  ngOnInit(): void {
    this.datosNuevos = { ...this.data['principal'] };
    this.datosNuevos2 = { ...this.data['secundario'] };
   
    console.log(this.datosNuevos)
  }

  operar() {
    // this.datosReg={
    //   pkID: {
    //       nl_subdia:this.form.value.subdiario,
    //       nl_anio: `${this.date.getFullYear()}`,
    //       nl_mes: `${this.date.getMonth()+1}`
    //   },
    //   nl_nume:this.form.value.tex_nl_subdia ,
    //   nl_usrcrea:"Mirella",
    //   nl_feccrea:"",
    //   nl_hracrea:"",
    //   nl_usract:"",
    //   nl_fecact:"",
    //   nl_hraact:""
  // }
      //MODIFICAR
      this.servivio.modificar(this.datosNuevos).pipe(switchMap(() => {
        return this.servivio.listar();
      }))
        .subscribe(data => {
          this.servivio.settabNumCambio(data);
          this.servivio.setMensajeCambio("SE MODIFICO");
        });

    
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }

}
