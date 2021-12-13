import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { MedicoComponent } from './pages/medico/medico.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicoDialogoComponent } from './pages/medico/medico-dialogo/medico-dialogo.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TablaNumeracionComponent } from './pages/tabla-numeracion/tabla-numeracion.component';
import { ModalTabNumComponent } from './pages/tabla-numeracion/modal-tab-num/modal-tab-num.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MedicoComponent,
    
    MedicoDialogoComponent,
         TablaNumeracionComponent,
         ModalTabNumComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
