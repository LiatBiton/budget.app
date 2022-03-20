import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spend } from 'src/app/models/spend.model';
import { SpendService } from 'src/app/services/spend.service';


@Component({
  selector: 'category-spends',
  templateUrl: './category-spends.component.html',
  styleUrls: ['./category-spends.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySpendsComponent implements OnInit {
  @Input() spend: Spend
  @Input() isCollapsed: boolean
  @Output() onRemove = new EventEmitter<string>()
  editMode: boolean = false

  constructor(private spendService: SpendService) { }

  ngOnInit(): void {
    console.log(this.isCollapsed)
  }
  onRemoveSpend() {
    console.log('on remove')
    this.onRemove.emit(this.spend._id)
  }
  getDayNumber(timeStemp){
    return new Date(timeStemp).getDate()
  }
  getMonth(timeStemp){
    return new Date(timeStemp).getMonth()+1
  }
  getYear(timeStemp){
    return new Date(timeStemp).getFullYear()
  }
  getDayName(timeStemp){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(timeStemp).getMonth()]
  }
  OnEditClick(){
    this.editMode = true
    console.log(this.spend)
  }

  async onSaveSpend(){
    await this.spendService.save(this.spend)
    console.log(this.spend)
    this.editMode = false

  }
}
