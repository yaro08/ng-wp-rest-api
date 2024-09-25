import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgWpRestApiModule} from '../../../ng-wp-rest-api/src/lib/ng-wp-rest-api.module';
import {PostsService} from '../../../ng-wp-rest-api/src/lib/services/posts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgWpRestApiModule,
  ],
  providers: [
    { provide: 'wpApiBaseUrl', useValue: 'https://ventajas2.zeus.umh.es/wp-json' },
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
