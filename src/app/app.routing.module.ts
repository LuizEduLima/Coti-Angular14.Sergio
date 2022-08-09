
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";


import { CadastroContatosComponent } from "./components/contatos/cadastro-contatos/cadastro-contatos.component";
import { ConsultaContatosComponent } from "./components/contatos/consulta-contatos/consulta-contatos.component";
import { EdicaoContatosComponent } from "./components/contatos/edicao-contatos/edicao-contatos.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { PasswordComponent } from "./components/pages/password/password.component";
import { RegisterComponent } from "./components/pages/register/register.component";

const routes: Routes = [
    { path: '', redirectTo: 'acessar-conta', pathMatch: 'full' },
    { path: 'acessar-conta', component: LoginComponent },
    { path: 'criar-conta', component: RegisterComponent },
    { path: 'recuperar-senha', component: PasswordComponent },
    { path: 'cadastro-contatos', component: CadastroContatosComponent },
    { path: 'editar-contato/:id', component: EdicaoContatosComponent },
    { path: 'consulta-contatos', component: ConsultaContatosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
