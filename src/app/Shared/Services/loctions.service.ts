import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationModel} from '../Models/LocationModel';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoctionsService {

  private baseUrl = environment.baseAddress;

  constructor(private http: HttpClient) {
  }

  public GetLoctions(): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(this.baseUrl + 'api/loctions');
  }

}
