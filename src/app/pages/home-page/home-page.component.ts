import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  user$: Observable<User>
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    this.user$ = this.userService.user$
  }

  ngOnDestroy(): void {
  }
  daysleft(): number {
    const now = new Date().getDate();
    const dayInThisMonth =  new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate();
    return dayInThisMonth - now
  }
}
