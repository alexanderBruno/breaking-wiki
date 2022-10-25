import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('quotes')
  }

  getQuotesByCharacter(author: string):Observable<Quote[]>  {
    return this.http.get<Quote[]>('quote?author=' + author)
  }
}
