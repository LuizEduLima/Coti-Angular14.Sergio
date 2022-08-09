import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './components/contatos/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/contatos/consulta-contatos/consulta-contatos.component';
import { EdicaoContatosComponent } from './components/contatos/edicao-contatos/edicao-contatos.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PasswordComponent } from './components/pages/password/password.component';
import { MenuPrincipalComponent } from './shared/menu-principal/menu-principal.component'



@NgModule({
  declarations: [
    AppComponent,
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EdicaoContatosComponent,
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    MenuPrincipalComponent,

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
