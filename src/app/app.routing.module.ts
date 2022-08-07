
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";


import { CadastroContatosComponent } from "./components/cadastro-contatos/cadastro-contatos.component";
import { ConsultaContatosComponent } from "./components/consulta-contatos/consulta-contatos.component";
import { EdicaoContatosComponent } from "./components/edicao-contatos/edicao-contatos.component";

const routes: Routes = [
    { path: 'cadastro-contatos', component: CadastroContatosComponent },
    { path: 'consulta-contatos', component: ConsultaContatosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }