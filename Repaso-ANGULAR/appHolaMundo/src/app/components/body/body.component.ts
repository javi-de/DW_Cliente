import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  mostrar= true;
  mostrar2= true;

  frase:any= {
    mensaje: "asdasdasdasdsss",
    autor: "asd"
  }

  personajes: string[]= ["Paco", "Juana", "Mariano", "Pepa"];


  constructor() { }

  ngOnInit(): void {
  }

}
