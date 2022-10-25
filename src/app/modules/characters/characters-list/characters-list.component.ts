import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    searchX: string = '';

    constructor(private charactersService : CharactersService, private router : Router) {}

    ngOnInit(): void {
      this.getCharacters();
    }

    ngOnDestroy(): void {
      this.charactersSub.unsubscribe()
    }

    getCharacters() {
        this.charactersService.getCharacters().subscribe((c) => {
            this.charactersSub = this.charactersService.getCharacters().subscribe(
              (data) => {
                this.characters = data;
              }
            )
        })
    }

    filter(event: any): void {
      let name = event.target.value;
      if (name) {
        if (name.includes(' ')) {
          name = name.replace(/ /g, '+');
          this.filterSearch(name)
        } else {
          this.filterSearch(name)
        }
      } else {
        this.getCharacters();
      }
    }

    filterSearch(name:string): void {
      this.charactersSub = this.charactersService.getCharacterByName(name).subscribe(
        (c) => {
          this.characters = c;
        }
      );
    }

}
