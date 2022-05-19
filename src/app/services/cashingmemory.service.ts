import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CashingmemoryService implements HttpInterceptor {
  cache:Map<string,HttpResponse<any>>=new Map<string,HttpResponse<any>>();
  constructor() {
    console.log("In Cashing Memory Area")
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(request.method!='GET'){
        console.log("Request Send to Server");
        return next.handle(request);
      }
      let cachedResponse=this.cache.get(request.url);
      if(cachedResponse){
        console.log("Response Return from cached")
        return of(cachedResponse);

      }else{
        return next.handle(request).pipe(tap(statevent=>{
          if(statevent instanceof HttpResponse){
            this.cache.set(request.url,statevent.clone());
          }
        }));
      }

  }
}

