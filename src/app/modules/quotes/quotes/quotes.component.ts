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
  quotesRecovery: Quote[] = [];

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
        this.quotesRecovery = q;
      }
    )
  }

  filterQuotes(event: any) {
    let name = event.target.value;
    if (name) {
      console.log('hay sustancia')
        
      this.quotes = this.quotesRecovery.filter(quoName => quoName.author.toLocaleLowerCase().includes(name));
      
    } else {
      this.quotes = this.quotesRecovery;
    }
  }


}
