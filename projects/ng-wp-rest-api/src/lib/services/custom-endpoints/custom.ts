import {Observable} from 'rxjs';

export interface Custom {
  list<T>(url: string, options?: any): Observable<T[]>;
  get<T>(url: string, id: number, options?: any): Observable<T>;
}
