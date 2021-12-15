import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

import { TbGenModel } from 'src/app/model/tb-gen-model';
import { TablaNumeracion } from 'src/app/model/tabla-numeracion';
import { TablaNumeracionService } from 'src/app/services/tabla-numeracion.service';
import { TbGen } from 'src/app/services/tb-gen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-tb-nuevo',
  templateUrl: './modal-tb-nuevo.component.html',
  styleUrls: ['./modal-tb-nuevo.component.css']
})
export class ModalTbNuevoComponent implements OnInit {

  datosNuevos: TablaNumeracion;
  datosNuevos2: TablaNumeracion;
  date: Date = new Date();
  datosReg:TablaNumeracion;
  datosCombo;
  seleccionada: string ;
  public form:FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ModalTbNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: TablaNumeracion,
    private servivio: TablaNumeracionService,
    private servivioTbGen:TbGen,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.datosNuevos = { ...this.data };

    this.servivioTbGen.listar().subscribe(data=> {
      this.datosCombo=data;
      console.log(this.datosCombo[0]);
      this.seleccionada= this.datosCombo[0].pkID.tl_clave;
    });
    this.form=this.formBuilder.group({
      tex_nl_subdia:['',Validators.required],
      subdiario:['',Validators.required]
    })
  }

  operar() {
   
    this.datosReg={
      pkID: {
          nl_subdia:this.form.value.subdiario,
          nl_anio: `${this.date.getFullYear()}`,
          nl_mes: `${this.date.getMonth()+1}`
      },
      nl_nume:this.form.value.tex_nl_subdia ,
      nl_usrcrea:"Mirella",
      nl_feccrea:"",
      nl_hracrea:"",
      nl_usract:"",
      nl_fecact:"",
      nl_hraact:""
  }
      this.servivio.registrar(this.datosReg).subscribe((dta2) => {
        this.servivio.listar().subscribe(data => {
          this.servivio.settabNumCambio(data);
          this.servivio.setMensajeCambio(dta2['mensaje']+"");
          // console.log(this.datosReg);
          console.log(dta2);
        });
      });
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }

}
