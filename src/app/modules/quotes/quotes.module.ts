import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/core/apiInterceptor';
import { QuotesService } from './quotes.service';
import { QuoteCardComponent } from 'src/app/components/quote-card/quote-card.component';



@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    HttpClientModule,
    QuoteCardComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    QuotesService
  ]
})
export class QuotesModule { }
