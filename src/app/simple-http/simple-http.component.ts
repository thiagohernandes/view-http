import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Item } from '../model/item';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data: Object;
  loading: boolean;
  lista: Item[];
  
  constructor(private http: Http) { 
  }
  
  ngOnInit() {
    
  }
  
  makeRequest(): void {
   this.loading = true;
   this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
            this.data = res.json();
            console.log(this.data);
            this.loading = false;
            });
  }
  makeRequestLista(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts')
             .subscribe((res: Response) => {
             this.lista = res.json();
             console.log(this.lista);
             this.loading = false;
             });
   }
}
