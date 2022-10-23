import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  {path: '', component: EpisodesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // this should be for child
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
