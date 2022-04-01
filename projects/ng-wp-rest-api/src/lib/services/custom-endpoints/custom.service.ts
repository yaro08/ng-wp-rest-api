import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Custom} from './custom';

@Injectable({
  providedIn: 'root'
})
export class CustomEndpointService implements Custom {

  constructor(private http: HttpClient) { }

  get<T>(url: string, id: number, options = {}): Observable<T> {
    return this.http.get<T>(url.concat(id.toString()), options);
  }

  list<T>(url: string, options?: {}): Observable<T[]> {
    if (options) {
      options = { params: { ...options } };
    }
    return this.http.get<T[]>(url, options);
  }
}
