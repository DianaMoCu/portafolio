import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Inyeccion de nuestro servicio*/
// tslint:disable-next-line: variable-name
  constructor(public _infoPagina: InfoPaginaService,
              public productosService: ProductosService) {}
}
