import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokeService } from './joke_service/joke_service';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    JokeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
