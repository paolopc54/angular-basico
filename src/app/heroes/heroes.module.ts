import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { heroeComponente } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        //se declaran los components
        heroeComponente,
        ListadoComponent
    ],
    exports: [
        //acá solo estamos exportando el listadocomponent
        ListadoComponent
    ],
    imports: [
        //xq estamos usando directivas propias de angular como el ngIF ngFor
        CommonModule
    ]
})
export class HeroesModule {}