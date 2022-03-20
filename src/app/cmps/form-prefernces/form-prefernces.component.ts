import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'form-prefernces',
  templateUrl: './form-prefernces.component.html',
  styleUrls: ['./form-prefernces.component.scss']
})
export class FormPreferncesComponent implements OnInit {
  @Input() user: User
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  async onSavePrefernces(){
    console.log('hi')
    await this.userService.saveUser(this.user)
    console.log(this.user)

  }

}
