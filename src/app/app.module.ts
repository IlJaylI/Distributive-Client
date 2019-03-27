import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './Components/Users/users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './Shared/Services/users.service';
import { UsersDetailComponent } from './Components/Users/users-detail/users-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
