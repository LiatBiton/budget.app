import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterBy } from 'src/app/models/filter-by.model';
import { SpendService } from 'src/app/services/spend.service';

@Component({
  selector: 'spend-filter',
  templateUrl: './spend-filter.component.html',
  styleUrls: ['./spend-filter.component.scss']
})
export class SpendFilterComponent implements OnInit, OnDestroy {

  filterBy: FilterBy
  subscription: Subscription

  constructor(private SpendService: SpendService) { }

  ngOnInit(): void {
    this.subscription = this.SpendService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
  onSetFilterBy() {
    this.SpendService.setFilterBy({ ...this.filterBy })
  }

}
