import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraPageComponent } from './carteira-page.component';

describe('CarteiraPageComponent', () => {
  let component: CarteiraPageComponent;
  let fixture: ComponentFixture<CarteiraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteiraPageComponent]
    });
    fixture = TestBed.createComponent(CarteiraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
