import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Custom} from './custom';

@Injectable({
  providedIn: 'root'
})
export class WpApiCustomService implements Custom {

  constructor(
    private http: HttpClient,
    @Inject('wpApiBaseUrl') private wpApiBaseUrl: string,
    @Optional() @Inject('wpApiNamespace') private wpApiNamespace: string) {
    this.wpApiNamespace = this.wpApiNamespace || 'wp/v2';
  }

  get<T>(url: string, id: number, options = {}): Observable<T> {
    return this.http.get<T>(`${this.wpApiBaseUrl}/${this.wpApiNamespace}/${url.concat(id.toString())}`, options);
  }

  list<T>(url: string, options?: {}): Observable<T[]> {
    if (options) {
      options = { params: { ...options } };
    }
    return this.http.get<T[]>(`${this.wpApiBaseUrl}/${this.wpApiNamespace}/${url}`, options);
  }
}
