import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { Spend, SpendDb } from 'src/app/models/spend.model'



@Component({
  selector: 'spend-list',
  templateUrl: './spend-list.component.html',
  styleUrls: ['./spend-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpendListComponent implements OnInit {

  @Input() spends: SpendDb
  @Output() onRemove = new EventEmitter<string>()
  

  constructor() {
  }

  ngOnInit(): void {
    console.log('spends from list' , this.spends)
  }

  
}
