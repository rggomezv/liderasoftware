import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedicoComponent } from './pages/medico/medico.component';
import { TablaNumeracionComponent } from './pages/tabla-numeracion/tabla-numeracion.component';


const routes: Routes = [
  
  { path: 'tablaNumeracion', component: TablaNumeracionComponent },
  { path: 'tablaGeneral', component: MedicoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
