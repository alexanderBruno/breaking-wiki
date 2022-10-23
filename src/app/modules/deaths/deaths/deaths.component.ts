import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Death } from 'src/app/models/death';
import { DeathsService } from '../deaths.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.scss']
})
export class DeathsComponent implements OnInit, OnDestroy {

  constructor(private deathService: DeathsService) { }

  deaths: Death[] = [];
  deathsSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.getDeaths();
  }

  ngOnDestroy(): void {
    this.deathsSub.unsubscribe();
  }

  getDeaths(): void {
    this.deathsSub = this.deathService.getDeaths().subscribe(
      (d) => {
        this.deaths = d;
      }
    )
  }



}
