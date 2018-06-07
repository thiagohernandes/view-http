
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';



import { Item } from '../model/item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpObservableService {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  consultaOrdemServico(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiRoot).pipe(
                    catchError(this._errorHandler));
  }

  _errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

}
