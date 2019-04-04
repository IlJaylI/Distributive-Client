import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersListComponent} from './Components/Users/users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './Shared/Services/users.service';
import {UsersDetailComponent} from './Components/Users/users-detail/users-detail.component';
import {UsersAddComponent} from './Components/Users/users-add/users-add.component';
import {FormsModule} from '@angular/forms';
import {UsersLoginComponent} from './Components/Users/users-login/users-login.component';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersDetailComponent,
    UsersAddComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
