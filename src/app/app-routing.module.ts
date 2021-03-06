import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './Components/Users/users-list/users-list.component';
import {UsersDetailComponent} from './Components/Users/users-detail/users-detail.component';
import {UsersAddComponent} from './Components/Users/users-add/users-add.component';
import {UsersLoginComponent} from './Components/Users/users-login/users-login.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  {path: 'users/:username', component: UsersDetailComponent},
  {path: 'users/add', component: UsersAddComponent},
  {path: '/login', component: UsersLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

