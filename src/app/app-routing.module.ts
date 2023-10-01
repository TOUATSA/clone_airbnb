import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : "home", component : HomeComponent },
  { path : '', component : SearchbarComponent, pathMatch : 'full' },
  { path : 'flat/apartment', component : AddAppartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
