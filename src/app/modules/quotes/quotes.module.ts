import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/core/apiInterceptor';
import { QuotesService } from './quotes.service';



@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    QuotesService
  ]
})
export class QuotesModule { }
