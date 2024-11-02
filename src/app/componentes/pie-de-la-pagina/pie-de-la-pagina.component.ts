import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-de-la-pagina',
  templateUrl: './pie-de-la-pagina.component.html',
  styleUrl: './pie-de-la-pagina.component.css'
})
export class PieDeLaPaginaComponent {
  
  anio: number = new Date().getFullYear();

}
