import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddData } from './addData';
import { IConnection } from './connection';

@Injectable({
  providedIn: 'root'
})
export class DelphiService {

  constructor(private http : HttpClient) { }
  private base_url : string = 'http://localhost:8080/api';
  private test_url : string = 'http://localhost:8080/api/testconnection';

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }

  httpOptions : {
      headers?: HttpHeaders | {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    },
      
  }
  
  testConnection(): Observable<IConnection>{
    return this.http.get<IConnection>(this.base_url + "/testconnection");
  }

  // add(): Observable<string> {
  //   return this.http.post(this.base_url + '/add');
  // }

  addJson(body): Observable<IAddData> {
    
    return this.http.post<IAddData>(this.base_url + '/addJson', JSON.stringify(body));
  }

}
 