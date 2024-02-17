import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteiraPageComponent } from './pages/carteira-page/carteira-page.component';
import { CarteiraComponent } from './components/carteira/carteira.component';

const routes: Routes = [
  { path: '', component: CarteiraComponent },
  { path: 'carteira', component: CarteiraPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
