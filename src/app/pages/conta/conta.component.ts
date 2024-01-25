import { Component, Input, OnInit } from '@angular/core';
import { ContaModel } from 'src/app/models/conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css'],
})
export class ContaComponent implements OnInit {
  @Input() arrayContas: ContaModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
