import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { TablePagesComponent } from './table-pages/table-pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';



const routes: Routes =[

  {
    path:'home-page',
    component: HomePageComponent,

  },
  
  {
    path:'log-in-form',
    component: LogInFormComponent,
  },
  {
    path:'register-form',
    component: RegisterFormComponent,
  },
  {
    path:'table-pages',
    component: TablePagesComponent,
  },
  {
    path:'**',
    redirectTo: '/AppComponent'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInFormComponent,
    TablePagesComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
