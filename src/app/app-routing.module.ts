import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './Components/Users/users-list/users-list.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

