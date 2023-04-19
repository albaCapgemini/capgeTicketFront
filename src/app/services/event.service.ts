import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private url = 'http://localhost:7777/event';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get(this.url);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post(this.url, event);
  }

  getById(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  removeEvent(id: any) {
    return this.http.delete(this.url +'/'+ id,{responseType: 'text'});
  }

  updateEvent(event: any): Observable<any> {
    return this.http.put(this.url, event);
  }
}
