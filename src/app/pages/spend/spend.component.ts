import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model'
import { Spend, SpendDb } from '../../models/spend.model'
import { UserService } from '../../services/user.service'
import { SpendService } from '../../services/spend.service'

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent implements OnInit {

  spends: Spend[]
  spends$: Observable<SpendDb>
  user$ : Observable<User>
  
  constructor(private userService: UserService, private spendService: SpendService) { }

  ngOnInit(): void {
    this.spendService.query()
    this.spends$ = this.spendService.spends$
    this.userService.getUser()
    this.user$ = this.userService.user$
    console.log(this.spends$)
  }

  onRemoveSpend(spendId:string) {
    this.spendService.remove(spendId)
  }

}
