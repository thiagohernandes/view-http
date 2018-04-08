import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Item } from '../model/item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpObservableService {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  consultaOrdemServico():Observable<Item[]>{
    return this.http.get<Item[]>(this.apiRoot)
                    .catch(this._errorHandler);
  }

  _errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
