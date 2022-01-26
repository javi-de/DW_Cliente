import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe-fix',
  templateUrl: './heroe-fix.component.html',
  // styleUrls: ['./heroe.component.css']
})
export class HeroeFixComponent /*implements OnInit*/ {

  heroe: any={};

  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService){

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['name']);
      this.heroe= this._heroesService.getHeroeByName(params['name']);
      console.log("--------- HEROE ----------");
      console.log(this.heroe);
      
    })
  }

  ngOnInit(): void {
    
  }

}
