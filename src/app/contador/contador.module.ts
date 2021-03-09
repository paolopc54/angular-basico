import { NgModule } from '@angular/core';
import { ContadorComponente } from './contador/contador.component';


@NgModule({
    declarations: [
        //se declaran los components
        ContadorComponente
    ],
    exports: [
        ContadorComponente
    ]
})
export class ContadorModule{

}