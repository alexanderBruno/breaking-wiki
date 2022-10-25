import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Death } from 'src/app/models/death';
import { DeathCount } from 'src/app/models/death-count.model';

@Injectable({
  providedIn: 'root'
})
export class DeathsService {

  constructor(private http: HttpClient) { }

  getDeaths(): Observable<Death[]> {
    return this.http.get<Death[]>('deaths');
  }

  getDathCountByCharacter(name: string): Observable<DeathCount[]> {
    return this.http.get<DeathCount[]>('death-count?name=' + name);
  }

  getDeathByCharacter(name: string): Observable<Death[]> {
    return this.http.get<Death[]>('death?name=' + name)
  }
}
