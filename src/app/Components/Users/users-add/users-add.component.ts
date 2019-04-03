import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../Shared/Services/users.service';
import {UserModel} from "../../../Shared/Models/UserModel";
import {LocationModel} from "../../../Shared/Models/LocationModel";
import {LoctionsService} from "../../../Shared/Services/loctions.service";

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  model: UserModel;
  loctionList: LocationModel[];

  //sweetAlert2 google install displays message box

  constructor(private usersService: UsersService, private loctionsService: LoctionsService) {
    this.model = new UserModel();
  }

  ngOnInit() {
    this.loctionsService.GetLoctions().subscribe(x => this.loctionList = x);
  }

  public Register() {
    //debugger;
    this.usersService.addUser(this.model).subscribe(x => {
      //Swal.fire('Success','Operation succeful');
    }, error1 => {
      //Swal.fire('Success','Operation succeful');
    });
  }

}
