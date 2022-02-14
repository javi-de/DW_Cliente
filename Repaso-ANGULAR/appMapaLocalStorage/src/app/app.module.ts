import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY3YQ6aNb7YXoz13RIxq5fVyzdbak7sQ0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
