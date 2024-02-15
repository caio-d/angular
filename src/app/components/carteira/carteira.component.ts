import { Component, Input, OnInit } from '@angular/core';
import { CarteiraModel } from 'src/app/models/carteira.model';
import { CarteiraService } from 'src/app/services/carteira-service/carteira.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css'],
})
export class CarteiraComponent implements OnInit {
  @Input() carteiras: CarteiraModel[] = [];

  constructor(private carteiraService: CarteiraService) {}

  ngOnInit(): void {
    this.getCarteira();
    console.log(this.carteiras);
  }

  getCarteira(): void {
    this.carteiraService
      .getCarteira()
      .subscribe((carteiras: CarteiraModel[]) => {
        this.carteiras = carteiras;
        console.log(this.carteiras);
      });
  }
}
