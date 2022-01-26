import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //método para que funcione la barra de búsqueda del navbar
  buscarHeroe(termino:string){
    // console.log(termino);
    
    this.router.navigate(['buscar', termino]);
  }
}