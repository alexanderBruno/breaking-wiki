import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path: '', component: QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // this should be for child
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
