import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ChoiceTypePropertiesBarComponent } from './choice-type-properties-bar/choice-type-properties-bar.component';
import { CardOfPicturePropertiesComponent } from './card-of-picture-properties/card-of-picture-properties.component';
import { AddAppartmentComponent } from './add-appartment/add-appartment.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    NavbarComponentComponent,
    SearchbarComponent,
    ChoiceTypePropertiesBarComponent,
    CardOfPicturePropertiesComponent,
    AddAppartmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
