import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Projects} from './projects';
import {Project} from '../../models/project';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements Projects {

  constructor(private http: HttpClient) { }

  get(id: number, options = {}): Observable<Project> {
    return this.http.get<Project>('project/' + id, options);
  }

  list(options = {}): Observable<Project[]> {
    options = { params: { _embed: 'author,wp:featuredmedia', ...options } };
    return this.http.get<Project[]>(`projects`, options)
      .pipe(
        map<Project[], Project[]>((projects) => {
          return projects.map<Project>(project => {
            return {
              ...project,
              project_category: project.project_category,
              project_tag: project.project_category
            };
          });
        })
      );
  }
}
