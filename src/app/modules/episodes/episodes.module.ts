import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/core/apiInterceptor';
import { EpisodesService } from './episodes.service';
import { CharactersService } from '../characters';



@NgModule({
  declarations: [
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    EpisodesService,
    CharactersService
  ]
})
export class EpisodesModule { }
