import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from 'src/validators/password-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  formRegister = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl(['', Validators.required, Validators.email]),
    senha: new FormControl(['', Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    senhaconfirmacao: new FormControl('', [Validators.required])
  },
    //incluindo as validações customizadas
    {
      validators: [PasswordMatchValidator.MatchPassword]

    }
  );

  get form(): any {
    return this.formRegister.controls;
  }
  onSubmit() {
    console.log(this.formRegister.value);
  }

}
