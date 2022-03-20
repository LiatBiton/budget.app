import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SpendService } from 'src/app/services/spend.service';
import { Spend, SpendDb } from '../../models/spend.model'


@Component({
  selector: 'cash-flow-trends',
  templateUrl: './cash-flow-trends.component.html',
  styleUrls: ['./cash-flow-trends.component.scss']
})
export class CashFlowTrendsComponent implements OnInit, OnDestroy{
  spends: Spend[]
  spends$: Observable<SpendDb>
  subscription: Subscription

  constructor(private spendService: SpendService) { }

  ngOnInit() {
    this.spendService.query()
    this.spends$ = this.spendService.spends$;
    this.subscription = this.spends$.subscribe((spends) => {
      this.spends = Object.entries(spends.totals).map((curr):Spend => ({name: curr[0] , value: curr[1]} ))
    })
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }




}
