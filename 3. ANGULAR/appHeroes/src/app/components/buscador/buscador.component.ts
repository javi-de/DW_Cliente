import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  // styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService,  private _router:Router) {              
    this.termino = "";
    this.heroes = [];
 }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
    
      this.heroes= this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

    //funcion para ir a la página de cada heroe (solo muestra por consola el indice de cada uno) con JS (desde la etiqueta button de heroes.component.html)
    verHeroe(idx:string){
      this._router.navigate(['heroe/fix', idx]);
    }
  }
  


