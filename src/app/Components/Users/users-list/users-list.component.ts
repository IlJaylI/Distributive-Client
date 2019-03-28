import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../Shared/Services/users.service';
import {UserModel} from '../../../Shared/Models/UserModel';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => this.users = x);
  }

}
