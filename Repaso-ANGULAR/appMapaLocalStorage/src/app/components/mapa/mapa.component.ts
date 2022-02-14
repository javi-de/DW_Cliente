import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MarDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[]= [];

  lat= 51.678418;
  lng= 7.808007;

  constructor(private snackBar:MatSnackBar) {
    //const nuevoMarcador= new Marcador(51.678418, 7.808007);
    //this.marcadores.push(nuevoMarcador);
    if(localStorage.getItem("marcadores")){
      this.marcadores= JSON.parse( localStorage.getItem("marcadores") || '{}');
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador(evento:any){
    //console.log(evento);
    const coords: {lat:number, lng:number}= evento.coords;
    const nuevoMarcador= new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  guardarStorage(){
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
      this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  borrarMarcador(i:number){
    //console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador:Marcador){
    const dialogRef= this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {name: this.name, animal: this.naimal} 
    });
  }

  

}
