import {Inject, Injectable, Optional} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(
    @Inject('wpApiBaseUrl') private wpApiBaseUrl: string,
    @Optional() @Inject('wpApiNamespace') private wpApiNamespace: string) {
    this.wpApiNamespace = this.wpApiNamespace || 'wp/v2';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }
}

