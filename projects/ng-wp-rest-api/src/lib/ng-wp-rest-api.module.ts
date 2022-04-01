import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { BaseUrlInterceptor } from './utils/BaseUrlInterceptor';
import {CustomEndpointService} from './services/custom-endpoints/custom.service';

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
    CustomEndpointService
  ]
})
export class NgWpRestApiModule { }
