import { Component, OnInit } from '@angular/core';
import { HttpObservableService } from '../services/http-observable.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from '../model/item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-obsevable-rx',
  templateUrl: './obsevable-rx.component.html',
  styleUrls: ['./obsevable-rx.component.css']
})
export class ObsevableRxComponent implements OnInit {

  private apiRoot = 'http://jsonplaceholder.typicode.com/posts/';
  public lista:Object = null;
  public lista2:Item[] = null;
  public msgError:any = null;

  constructor(private http: HttpClient, private httpObservableService:HttpObservableService) { }

  ngOnInit() {
  }

  pesquisar(id){
    this.http.get(this.apiRoot+id)
             .subscribe(data => {this.lista = data; console.log(data)},
                        error => this.msgError = error);
  }

  pesquisarService(){
    this.httpObservableService.consultaOrdemServico()
                       .subscribe(data => {this.lista2 = data;},
                                  error => this.msgError = error);
  }

}
