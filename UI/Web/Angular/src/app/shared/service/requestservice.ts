import {Component} from '@angular/core'
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  user : string;
  readonly rootURL = "http://localhost:5000/api/request"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
};

AdminRequestSelectAll( ) {
  return this.http.get(this.rootURL + `/requestgetall/`, this.httpOptions);
}
SupportEngineerRequestSelectAll( ) {
    return this.http.get(this.rootURL + `/supportengineergetall/`, this.httpOptions);
  }
UserRequestSelectAll( ) {
    return this.http.get(this.rootURL + `/usergetall/`, this.httpOptions);
  }
}
