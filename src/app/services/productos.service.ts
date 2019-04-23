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
    // Promesa
    return new Promise( ( resolve, reject ) => {
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
        resolve();
      });
    });

  }
  getProducto( id: string) {
                   /*`Permite utilizar template literales ; hacer inserciones de pedazos de strings`*/
  return this.http.get(`https://angular-html-c9039.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {
// tslint:disable-next-line: whitespace
    if( this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar filtro
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string ) {
    console.log( this.productos );
    this.productosFiltrado = [];
    // Pasar a minuscula
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }
    });
  }
}
