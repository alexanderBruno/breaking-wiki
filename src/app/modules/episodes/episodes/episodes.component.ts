import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { CharactersService } from '../../characters';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit, OnDestroy {
  episodes: Episode[] = [];
  episodesRecovery: Episode[] = [];
  episodesSub: Subscription = new Subscription();
  selectedCharactersList: string[] = [];
  displayCharacters: boolean = false;
  

  constructor(private episodesService: EpisodesService,
              private characterService: CharactersService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEpisodes()
  }

  ngOnDestroy(): void {
    this.episodesSub.unsubscribe();
  }

  getEpisodes() {
    this.episodesSub = this.episodesService.getEpisodes().subscribe(
      (e) => {
        this.episodes = e;
        this.episodesRecovery = e;
      }
    )
  }

  getEpisodesBySeason(season: string) {
    let eps = this.episodesRecovery.filter((e) => e.season === season);
    this.episodes = eps;
  }

  seeCharacters(characters: string[]): void {
    this.displayCharacters = true;
    this.selectedCharactersList = characters;
  }

  navigateCharacter(character: string) {
    this.characterService.getCharacterByName(character).subscribe(
      (d) => {
        const character = d[0];
        this.router.navigate(['wiki/characters', character.char_id]);
      }
    );
  }

  filter(event: any) {

    let episode = event.target.value;
    if (episode) {
      this.episodes = this.episodesRecovery.filter(epName => epName.title.toLocaleLowerCase().includes(episode));
    } else {
      this.episodes = this.episodesRecovery;
    }
    

  }

}
