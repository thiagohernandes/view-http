import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpPromiseService {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private http: Http) { }

  pesquisarServico(id): Promise<any> {
    const promise = new Promise((resolve, reject) => {
    const apiURL = this.apiRoot + id;
      console.log(apiURL);
     return this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
          console.log(res.json());
          resolve(res.json());
          },
          msg => { // Error
          console.log(msg.status);
          reject(msg);
          }
        );
    });
    return promise;
  }

}
