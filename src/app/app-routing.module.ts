import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { InventarioComponent } from './Pages/inventario/inventario.component';

const routes: Routes = [
  { path: 'LogIn', component: LoginComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Inventarios/:inv', component: InventarioComponent },

  { path: '**', redirectTo: 'LogIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
