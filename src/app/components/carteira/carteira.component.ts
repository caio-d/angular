import { Component, Input, OnInit } from '@angular/core';
import { CarteiraModel } from 'src/app/models/carteira.model';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css'],
})
export class CarteiraComponent implements OnInit {
  @Input() dadosDaCarteira: CarteiraModel[] = [];

  ngOnInit(): void {
    console.log(this.dadosDaCarteira);
  }
}
