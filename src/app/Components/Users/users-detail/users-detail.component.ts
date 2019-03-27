import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../Shared/Services/users.service';
import {UserModel} from '../../../Shared/Models/UserModel';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  selectedUser: UserModel;

  constructor(private usersService: UsersService, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');

    this.usersService.getUser(username).subscribe(x => this.selectedUser = x);
  }

}
