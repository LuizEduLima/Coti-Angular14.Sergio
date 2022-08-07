import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './components/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/edicao-contatos/edicao-contatos.component';

import {HttpClientModule} from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'



@NgModule({
  declarations: [
    AppComponent,   
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EdicaoContatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
