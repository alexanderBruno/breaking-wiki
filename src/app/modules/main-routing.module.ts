import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'characters', pathMatch: 'full'},
  {path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)},
  {path: 'deaths', loadChildren: () => import('./deaths/deaths.module').then(m => m.DeathsModule)},
  {path: 'episodes', loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule)},
  {path: 'quotes', loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // this should be for child
  exports: [RouterModule]
})
export class MainRoutingModule { }
