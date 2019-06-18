import {Component} from '@angular/core'
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {
  user : string;
  readonly rootURL = "http://localhost:5000/api/register"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
};
register(form : any ) {
  console.log(form);
  var Data =
  {
      FirstName: form.FirstName,
      LastName: form.LastName,
      UserName: form.FirstName,
      Email: form.Email,
      Mobile: form.Mobile,
      Password:  form.Password,
      IsActive: 1,
      IsDeleted: 0,
      Role: 2
  };

  console.log(Data);
  return this.http.post(this.rootURL + `/add/`, Data, this.httpOptions);
}
update(form : any ) {
  console.log(form);
  var Data =
  {
      FirstName: form.firstName,
      LastName: form.LastName,
      Email: form.Email,
      Mobile: form.Mobile
      // ,
      // IsActive: 1,
      // IsDeleted: 0,
      // Role: 2
  };

  console.log(Data);
  return this.http.put(this.rootURL + `/update/`, Data, this.httpOptions);
}
delete(Email) {
  console.log(Email);
  var Data =
  {
    Email: Email
  };

  console.log(Data);
  return this.http.post(this.rootURL + `/delete/`, Data, this.httpOptions);
}
selectEmailId(Email)
{
  console.log(Email);
  var Data =
  {
    Email: Email
  };
  console.log(Data);
  return this.http.post(this.rootURL + '/GetbyEmailID/', Data, this.httpOptions);
}
SelectAll( ) {
  return this.http.get(this.rootURL + `/getall/`, this.httpOptions);
}
UserActiveList( ) {
  return this.http.get(this.rootURL + `/ActiveUserCount/`, this.httpOptions);
}
UserInActiveList( ) {
  return this.http.get(this.rootURL + `/InActiveUserCount/`, this.httpOptions);
}
}
