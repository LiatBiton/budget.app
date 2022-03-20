import { Component, OnInit, Input } from '@angular/core';
import { Spend } from 'src/app/models/spend.model';
import { SpendService } from 'src/app/services/spend.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  @Input() expense: Spend
  elseSelected: boolean = false
  constructor(private spendService: SpendService) { }

  ngOnInit(): void {
    this.expense = this.spendService.getEmptySpend()
    console.log(this.expense)
  }

  async onAddExpense(){
    console.log('onadd')
    await this.spendService.save(this.expense)
    console.log('after add')
  }
  onSelected(){
    if (this.expense.name==='else'){
      this.elseSelected = true
      this.expense.name = ''
      console.log(this.elseSelected)
    }
   
  }

  
}
