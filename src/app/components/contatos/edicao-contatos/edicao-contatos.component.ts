import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-edicao-contatos',
  templateUrl: './edicao-contatos.component.html',
  styleUrls: ['./edicao-contatos.component.css']
})
export class EdicaoContatosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
