import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import {CharactersService} from '../characters.service';


@Component({
  selector: 'app-characters-list', 
  templateUrl: './characters-list.component.html', 
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
    characters: Character[] = [];
    charactersSub: Subscription = new Subscription();

    constructor(private charactersService : CharactersService) {}

    ngOnInit(): void {
      this.getCharacters();
    }

    ngOnDestroy(): void {
      this.charactersSub.unsubscribe()
    }

    getCharacters() {
        this.charactersService.getCharacters().subscribe((c) => {
            console.log('characters list', c);
            this.charactersSub = this.charactersService.getCharacters().subscribe(
              (data) => {
                this.characters = data;
              }
            )
        })
    }

}
