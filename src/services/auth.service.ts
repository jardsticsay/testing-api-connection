import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment'

export interface User {
  login: string;
}
@Injectable()
export class AuthService {
  private apiURL = environment.apiURL;
  constructor(private http : HttpClient) { }
  
  getUsers(){
    return this.http.get<User>(`${this.apiURL}/users`).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
