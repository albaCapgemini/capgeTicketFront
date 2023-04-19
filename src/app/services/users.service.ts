import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'http://localhost:8888/user';

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  getById(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  updateUser(user : any) : Observable<any>{
    return this.http.put(this.url, user);
  }

  removeUser(id: string) : Observable<any>{
    return this.http.delete(this.url + '/' + id, {responseType: 'text'});
  }
}
