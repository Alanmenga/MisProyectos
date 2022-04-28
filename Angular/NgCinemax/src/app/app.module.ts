import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarSocialComponent } from './landing-page/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './landing-page/movies-filter/movies-filter.component';
import { SlidesComponent } from './landing-page/slides/slides.component';
import { WeeklyBilboardsComponent } from './landing-page/weekly-bilboards/weekly-bilboards.component';
import { PremieresComponent } from "./landing-page/premiere/premiere.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    SlidesComponent,
    WeeklyBilboardsComponent,
    PremieresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
