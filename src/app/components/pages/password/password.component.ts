import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  formPassword: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formPassword = this.fb.group({
      email: ['', Validators.required]
    })
  }
  onSubmit() {

  }
  get form(): any {
    return this.formPassword.controls;
  }


}
