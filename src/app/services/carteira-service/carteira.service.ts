import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteiraModel } from 'src/app/models/carteira.model';

@Injectable({
  providedIn: 'root',
})
export class CarteiraService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCarteira(): Observable<CarteiraModel[]> {
    return this.http.get<CarteiraModel[]>(`${this.apiUrl}/carteira`);
  }
}
