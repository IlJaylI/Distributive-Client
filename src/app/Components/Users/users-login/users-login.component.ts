import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../Shared/Services/users.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  isLoginError: boolean = false;

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
  }

  OnSubmit(userName, Password) {
    this.userService.userAuthentication(userName, Password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
        //swal.fire('Error Occured');
      }
  );
}


}
