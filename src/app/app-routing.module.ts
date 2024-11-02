import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoDeLaPaginaComponent } from './componentes/cuerpo-de-la-pagina/cuerpo-de-la-pagina.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path: 'inicio', component: CuerpoDeLaPaginaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
