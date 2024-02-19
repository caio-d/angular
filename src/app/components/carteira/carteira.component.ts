import { Component, Input, OnInit } from '@angular/core';
import { CarteiraClass } from 'src/app/models/carteira-class.model';
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
    this.carteiras.push(
      new CarteiraClass(
        1,
        1,
        'contas da casa e da moto',
        200,
        1000,
        '2024-19-02'
      )
    );
    this.carteiras.push(
      new CarteiraClass(1, 1, 'academia', 325, 1200, '2024-19-02')
    );
  }

  // getCarteira(): void {
  //   this.carteiraService
  //     .getCarteira()
  //     .subscribe((carteiras: CarteiraModel[]) => {
  //       this.carteiras = carteiras;
  //       console.log(this.carteiras);
  //     });
  // }
}
