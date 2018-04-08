import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpPromiseService } from '../services/http-promise.service';

@Component({
  selector: 'app-promise-callback',
  templateUrl: './promise-callback.component.html',
  styleUrls: ['./promise-callback.component.css']
})
export class PromiseCallbackComponent implements OnInit {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';
  public lista:Object = null;
  public lista2:Object = null;
  public msgError:any = null;

  constructor(private http: Http, private httpPromiseService:HttpPromiseService) { }

  ngOnInit() {
  }

  pesquisar(id) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiRoot+id;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success 
          this.lista = res.json();
          console.log(this.lista);
          console.log(res.status);
          resolve();
          },
          msg => { // Error
          console.log(msg.status);
          this.msgError = msg;  
          reject(msg);
          }
        );
    });
    return promise;
  }

  pesquisarService(id){
    this.httpPromiseService.pesquisarServico(id)
                           .then(result => {console.log(result);this.lista2 = result})
                           .catch(error => console.log(error));
  }

}
