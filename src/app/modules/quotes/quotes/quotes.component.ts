import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quote } from 'src/app/models/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnDestroy {

  quotes: Quote[] = [];
  quotesSub: Subscription = new Subscription();

  constructor(private quoteService: QuotesService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  ngOnDestroy(): void {
    this.quotesSub.unsubscribe();
  }

  getQuotes() {
    this.quotesSub = this.quoteService.getQuotes().subscribe(
      (q) => {
        this.quotes = q;
      }
    )
  }

}
