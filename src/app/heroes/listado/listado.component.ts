import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  //para borrar el ultimo elemento de un arreglo se usa el POP
  //para borrar el primer elemento de un arreglo se usa el shift
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado); 
  }

}
