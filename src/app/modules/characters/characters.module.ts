import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiInterceptor } from 'src/app/core/apiInterceptor';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from './characters.service';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { QuotesService } from '../quotes/quotes.service';
import { QuoteCardComponent } from 'src/app/components/quote-card/quote-card.component';
import { DeathsService } from '../deaths/deaths.service';



@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterProfileComponent
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    CharactersService,
    QuotesService,
    DeathsService
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    QuoteCardComponent
  ]
})
export class CharactersModule { }
