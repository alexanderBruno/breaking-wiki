import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsComponent } from './deaths/deaths.component';

const routes: Routes = [
  {path: '', component: DeathsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // this should be for child
  exports: [RouterModule]
})
export class DeathsRoutingModule { }
