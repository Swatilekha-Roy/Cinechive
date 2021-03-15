import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieServiceClient } from './services/movie.service.client';
import { OmdbTestComponent } from './omdb-test/omdb-test.component';
import { AppRoutingModule } from './app-routing.module';
import { NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    OmdbTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot()
  ],
  providers: [
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
