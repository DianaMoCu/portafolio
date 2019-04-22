import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {
    /*console.log('Servicio de infoPagina listo');*/
    /*Leer el archivo JSON*/
    this.http.get('assets/data/data-pagina.json')
        /*1.Enmarcar la respuesta y decir que es de tipo any
         .subscribe ( (resp: any) =>*/
        /*2. o  */
        .subscribe( (resp: InfoPagina) => {
           this.cargada = true;
           this.info = resp;
           console.log(resp);
           /*2. console.log( resp[ 'email' ] );*/
        });
  }
}
