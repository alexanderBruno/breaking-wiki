import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Death } from 'src/app/models/death';

@Injectable({
  providedIn: 'root'
})
export class DeathsService {

  constructor(private http: HttpClient) { }

  getDeaths(): Observable<Death[]> {
    return this.http.get<Death[]>('deaths');
  }
}
