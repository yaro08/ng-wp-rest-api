import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostsService, Project, WpApiCustomService } from 'ng-wp-rest-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-wp-rest-api-showcase';
  posts$: Observable<Post[]>;

  constructor(private posts: PostsService,
              private custom: WpApiCustomService) {
    this.posts$ = this.posts.list();

    this.custom.list<Project>('project', {_embed: 'author,wp:featuredmedia'}).subscribe(result => {
      console.log('result', result);
    });
  }
}
