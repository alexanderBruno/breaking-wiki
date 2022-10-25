import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuoteCardComponent } from 'src/app/components/quote-card/quote-card.component';
import { Character } from 'src/app/models/character';
import { Death } from 'src/app/models/death';
import { DeathCount } from 'src/app/models/death-count.model';
import { Quote } from 'src/app/models/quote';
import { DeathsService } from '../../deaths/deaths.service';
import { QuotesService } from '../../quotes/quotes.service';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent implements OnInit, OnDestroy {
  characterId: string = '';
  character?: Character;
  characterSub: Subscription = new Subscription();
  quotes: Quote[] = [];
  quotesSub: Subscription = new Subscription();
  death: Death = {} as Death;
  deathSub: Subscription = new Subscription();
  deathCount: DeathCount = {} as DeathCount;
  deathCountSub: Subscription = new Subscription();

  constructor(
              private route: ActivatedRoute, 
              private charactersService: CharactersService,
              private quotesService: QuotesService,
              private deathService: DeathsService) { 
      this.route.params.subscribe( params =>{ 
        console.log(params)
        this.getCharacterById(params['id'])
      });
    }

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    this.characterSub.unsubscribe();
    this.quotesSub.unsubscribe();
    this.deathSub.unsubscribe();
    this.deathCountSub.unsubscribe();
  }

  getCharacterById(id:string): void {
    
    this.characterSub = this.charactersService.getCharacter(id).subscribe(
      (c) => {
        this.character = c[0];
        this.getQuotes(this.character.name);
        this.getDeath(this.character.name);
        this.getDeathCount(this.character.name);

      }
    )
  }

  getQuotes(name: string) {
    const author = name.replace(/ /g, '+');
    console.log(author)
    this.quotesSub = this.quotesService.getQuotesByCharacter(author).subscribe(
      (q) => {
        this.quotes = q;
      }
    )
  }

  getDeath(name: string) {
    this.deathSub = this.deathService.getDeathByCharacter(name).subscribe(
      (d) => {
        this.death = d[0];
      }
    )
  }

  getDeathCount(name: string) {
    name = name.replace(/ /g, '+');
    this.deathCountSub = this.deathService.getDathCountByCharacter(name).subscribe(
      (dc) => {
        this.deathCount = dc[0];
      }
    );
  }

}
