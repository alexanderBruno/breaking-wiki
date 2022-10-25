import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  standalone: true,
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit, OnChanges {
  @Input() quote?: Quote;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('quote: ', this.quote);
  }

}
