import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieDeLaPaginaComponent } from './componentes/pie-de-la-pagina/pie-de-la-pagina.component';
import { CuerpoDeLaPaginaComponent } from './componentes/cuerpo-de-la-pagina/cuerpo-de-la-pagina.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProductosComponent } from './componentes/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieDeLaPaginaComponent,
    CuerpoDeLaPaginaComponent,
    AboutComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
