import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(localStorage.getItem('token')){
            req = req.clone({
                setHeaders: {
                    Authorization: `${localStorage.getItem('token')}`
                }
            });
        }
    
        return next.handle(req);
    }
}