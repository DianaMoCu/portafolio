import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Inyeccion de nuestro servicio json*/
  constructor(public _infoPagina: InfoPaginaService) {
      
  }
}
