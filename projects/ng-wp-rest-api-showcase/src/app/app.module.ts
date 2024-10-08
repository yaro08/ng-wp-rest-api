import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgWpRestApiModule, PostsService } from 'ng-wp-rest-api';

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
