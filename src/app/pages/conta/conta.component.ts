import { Component, Input, OnInit } from '@angular/core';
import { ContaModel } from 'src/app/models/conta.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css'],
})
export class ContaComponent implements OnInit {
  @Input() arrayContas: ContaModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getConta().subscribe((contas) => {
      this.arrayContas = contas;
    });
  }
}
