import { RouterModule, Routes } from '@angular/router';
//import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes= [
    //{ path: 'routePath', component: Component},
    { path: '**', pathMatch: 'full', redirectTo:'home'},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES, { useHash: true });