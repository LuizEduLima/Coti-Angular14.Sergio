import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { concatMap, map } from 'rxjs';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {

  mensagem: string = '';


  constructor() { }

  ngOnInit(): void {

  }
  formCadastro = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    telefone: new FormControl('', [Validators.required])

  });
  // função retorna os controles do formulário

  get form(): any {
    return this.formCadastro.controls;


  }
  onSubmit():void{
    this.formCadastro.reset();
    this.mensagem = "Contato cadastrado com sucesso";
    console.log(this.mensagem);

    setTimeout(() => {
      this.mensagem=''
    }, 2000);
  }



}
