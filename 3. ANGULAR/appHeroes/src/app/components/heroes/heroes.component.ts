import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]= [];

  constructor(private _heroesService:HeroesService,
              private _router:Router) {
  }

  //función que se ejecutará cuando esté toda la página cargada
  ngOnInit() {
    this.heroes= this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  //funcion para ir a la página de cada heroe (solo muestra por consola el indice de cada uno) con JS (desde la etiqueta button de heroes.component.html)
  verHeroe(idx:number){
    this._router.navigate(['heroe', idx]);
  }
}
