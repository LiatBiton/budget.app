import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  user$ : Observable<User>
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    this.user$ = this.userService.user$
  }

}
