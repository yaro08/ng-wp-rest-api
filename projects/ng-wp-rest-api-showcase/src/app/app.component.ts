import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../../../ng-wp-rest-api/src/lib/models/post';
import {PostsService} from '../../../ng-wp-rest-api/src/lib/services/posts.service';
import {CustomEndpointService} from '../../../ng-wp-rest-api/src/lib/services/custom-endpoints/custom.service';
import {Project} from '../../../ng-wp-rest-api/src/lib/models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-wp-rest-api-showcase';
  posts$: Observable<Post[]>;

  constructor(private posts: PostsService,
              private custom: CustomEndpointService) {
    this.posts$ = this.posts.list();

    this.custom.list<Project>('project', {_embed: 'author,wp:featuredmedia'}).subscribe(result => {
      console.log('result', result);
    });
  }
}
