import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>('episodes');
  }

  getEpisodesBySeason(season: string) {
    return this.http.get<Episode[]>('episodes/' + season);
  }
}
