import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

/*Especificacion de las rutas*/
// tslint:disable-next-line: variable-name
const app_routes: Routes = [

    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


/*Modulo encargado de la creacion de las rutas*/
@NgModule({
 /*Configuracion para el AppRoutingModule*/
    imports: [
        /* UseHash : Pone un # despues para que identifique que no es un directorio es un apartado*/
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }