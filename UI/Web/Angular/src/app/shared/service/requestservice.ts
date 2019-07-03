import {Component} from '@angular/core'
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  user : string;
  readonly rootURL = "http://192.168.2.24:9001/api/request"
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
  Add(form : any ) {
    console.log(form);
    var Data =
    {
      RequestPriority : form.RequestPriority,
      RequestDescription : form.RequestDescription,
      RequestShortDescription : form.RequestShortDescription,
      RequestModule : form.RequestModule
    };
    console.log(Data);
    return this.http.post(this.rootURL + `/requestadd/`, Data, this.httpOptions);
  }
  Update(form : any,_id ) {
    console.log(form);
    var Data =
    {
      _id : _id,
      RequestPriority : form.RequestPriority,
      RequestDescription : form.RequestDescription,
      RequestShortDescription : form.RequestShortDescription,
      RequestModule : form.RequestModule
    };
  
    console.log(Data);
    return this.http.put(this.rootURL + `/requestupdate/`, Data, this.httpOptions);
  }
  Delete() {
    var Data =
    {
     // Email: Email
    };
  
    console.log(Data);
    return this.http.post(this.rootURL + `/requestdelete/`, Data, this.httpOptions);
  }
  selectId(_id)
{
  console.log(_id);
  var Data =
  {
    _id: _id
  };
  return this.http.post(this.rootURL + '/RequestGetbyID/', Data, this.httpOptions);
}
}
