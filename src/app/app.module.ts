import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Declare seu componente raiz aqui
  ],
  imports: [
    BrowserModule // Importe o BrowserModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent] // Especifique o componente inicial
})
export class AppModule { }