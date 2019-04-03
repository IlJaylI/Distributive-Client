import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../Models/UserModel';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = environment.baseAddress;


  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl + 'api/users');
  }

  public getUser(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + 'api/Users/{Username}');
  }

  public addUser(user: UserModel): Observable<any> {
    return this.http.post(this.baseUrl + 'api/users/create', user);
  }



}
