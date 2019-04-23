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
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {
    this.http.get('https://angular-html-c9039.firebaseio.com/productos_idx.json')
        .subscribe(( resp: Producto[]) => {
          /*console.log(resp);*/
          this.productos = resp;
          /*Cuando ya se obtinen los productos se  inicializa en falso*/
          this.cargando = false;
          /*Tiempo para mostrar el cargando
          setTimeout(() => {
            this.cargando = false;
          }, 2000);*/
        });
  }
  getProducto( id: string) {
                   /*`Permite utilizar template literales ; hacer inserciones de pedazos de strings`*/
  return this.http.get(`https://angular-html-c9039.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });

    console.log( this.productosFiltrado );
  }
}
