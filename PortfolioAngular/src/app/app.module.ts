import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { Secao1Component } from './components/secao1/secao1.component';
import { Secao2Component } from './components/secao2/secao2.component';
import { Secao3Component } from './components/secao3/secao3.component';
import { ContainerGlobalComponent } from './components/container-global/container-global.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    Secao1Component,
    Secao2Component,
    Secao3Component,
    ContainerGlobalComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
