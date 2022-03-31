import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { BaseUrlInterceptor } from './utils/BaseUrlInterceptor';
import {ProjectsService} from './services/projects/projects.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [ ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    PostsService,
    ProjectsService
  ]
})
export class NgWpRestApiModule { }
