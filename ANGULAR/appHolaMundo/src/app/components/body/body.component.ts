import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  //clases para el ngIf
  frase: any= {
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'Ben Parker'
  };
  
  mostrar= true;


  //clases para el ngFor
  personajes: string[]= ['Spiderman', 'Hulk', 'Thor', 'Daredevil'];



  constructor() { }

  ngOnInit(): void {
  }

}
