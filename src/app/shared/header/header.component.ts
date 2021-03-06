import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*Inyeccion */
  constructor( public _SERVICIO: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
  }
  // Buscador
  buscarProducto( termino: string ) {
    if ( termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
    // console.log(termino);
  }
}
