import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _urlfblogin= './auth/facebook';
  constructor(private _http: HttpClient) { }

  fblogin(userdata){
    return this._http.post<any>(this._urlfblogin, userdata);
  }
}
