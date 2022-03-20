import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spend } from 'src/app/models/spend.model';

export const TYPES = [
  'Rent',
  'Restaurants',
  'Shopping',
  'Groceries',
  'Gym'
]

@Component({
  selector: 'spend-preview',
  templateUrl: './spend-preview.component.html',
  styleUrls: ['./spend-preview.component.scss'],
})
export class SpendPreviewComponent implements OnInit {
  @Input() spends: Spend[]
  @Input() category: any
  @Output() isCollapsed: boolean = false
  @Output() onRemove = new EventEmitter<string>()
  src: string
  types = TYPES

  constructor() {
  }

  ngOnInit(): void {
    this.src = `/assets/${this.category.key}.svg`
  }

  openCategoryList(): void {
    this.isCollapsed = !this.isCollapsed
    console.log(this.isCollapsed)
  }

}
