import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//import { SpaComponent } from './spa.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: 'home', component: SpaComponent },
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule {}