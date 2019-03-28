import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../Shared/Services/users.service';
import {UserModel} from "../../../Shared/Models/UserModel";

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  model: UserModel;

  //sweetAlert2 google install displays message box

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
  }

  public Register() {
    this.usersService.addUser(this.model).subscribe(x => {
      //Swal.fire('Success','Operation succeful');
    }, error1 => {
      //Swal.fire('Success','Operation succeful');
    });
  }

}
