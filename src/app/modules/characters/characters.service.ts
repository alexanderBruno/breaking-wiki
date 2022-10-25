import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>('characters');
  }

  getCharacter(id: string): Observable<Character[]> {
    return this.http.get<Character[]>('characters/' + id);
  }

  getCharacterByName(name: string): Observable<Character[]> {
    name = name.replace(/ /g, '_');
    console.log('name: ',name)
    return this.http.get<Character[]>('characters?name=' + name);
  }
}
