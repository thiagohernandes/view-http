
import {throwError as observableThrowError, Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';



import { Item } from '../model/item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpObservableService {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient, private router: Router) { }

  consultaOrdemServico(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiRoot).pipe(
                      tap(() => { console.log('Ok'); this.router.navigate(['/app-simple-http']);
                      }),
                      catchError(this._errorHandler));
  }

  _errorHandler(error: HttpErrorResponse) {
    // tslint:disable-next-line:no-debugger
    debugger;
    return observableThrowError(error.message || 'Server Error');
  }

}
