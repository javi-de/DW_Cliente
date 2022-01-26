import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // styleUrls: ['./heroe.component.css']
})
export class HeroeComponent /*implements OnInit*/ {

  heroe: any={};

  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService){

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe= this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
