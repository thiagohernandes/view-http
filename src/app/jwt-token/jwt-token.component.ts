import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Item } from '../model/item';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-jwt-token',
  templateUrl: './jwt-token.component.html',
  styleUrls: ['./jwt-token.component.css']
})
export class JwtTokenComponent implements OnInit {

  public jwtToken:any;
  private apiToken = `http://localhost:8080/api/login`;
  private apiProtegida = `http://localhost:8080/api/secured/protected`;
  private msgError:any;
  private resultApiProtegida:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getJwtToken(){
    let credenciais = {
      username : 'thiago',
      password : '123'
    }
    this.http.post(this.apiToken,credenciais,{responseType: 'text'})
    .subscribe(data => {this.jwtToken = data; 
                        console.log('¬¬¬¬¬¬'+data);
                        localStorage.setItem('token',data);
                      },
               error => this.msgError = error);
  }

  getPaginaProtegida(){
    this.http.get(this.apiProtegida,{responseType: 'text'})
    .subscribe(data => {this.resultApiProtegida = data; 
                        console.log('Text API protegida:  '+data);
                      },
               error => this.msgError = error);
  }

  removeJwtToken(){
    localStorage.removeItem('token');
  }

}
