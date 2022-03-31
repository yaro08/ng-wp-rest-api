import {Observable} from 'rxjs';
import {Project} from '../../models/project';


export interface Projects {
  list(options?: any): Observable<Project[]>;
  get(id: number, options?: any): Observable<Project>;
}
