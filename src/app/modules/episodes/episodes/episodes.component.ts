import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Episode } from 'src/app/models/episode';
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
  

  constructor(private episodesService: EpisodesService) { }

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

}
