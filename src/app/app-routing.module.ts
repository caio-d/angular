import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './pages/conta/conta.component';
import { CarteiraComponent } from './components/carteira/carteira.component';

const routes: Routes = [
  { path: '', component: ContaComponent },
  { path: 'carteira', component: CarteiraComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
