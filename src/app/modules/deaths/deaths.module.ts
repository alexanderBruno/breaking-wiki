import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathsComponent } from './deaths/deaths.component';
import { DeathsRoutingModule } from './deaths-routing.module';
import { DeathsService } from './deaths.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/core/apiInterceptor';



@NgModule({
  declarations: [
    DeathsComponent
  ],
  imports: [
    CommonModule,
    DeathsRoutingModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    DeathsService
  ]
})
export class DeathsModule { }
