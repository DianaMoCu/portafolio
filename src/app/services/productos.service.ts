import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto   } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  /*Bandera de cuando se inicializa la clase */
  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {
    this.http.get('https://angular-html-c9039.firebaseio.com/productos_idx.json')
        .subscribe(( resp: Producto[]) => {
          console.log(resp);
          this.productos = resp;
          /*Cuando ya se obtinen los productos se  inicializa en falso*/
          this.cargando = false;
        });
  }
}
