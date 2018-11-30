import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  HttpClient,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
