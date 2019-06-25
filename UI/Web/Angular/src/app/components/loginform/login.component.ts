import { LoginForm } from '../../shared/json/loginjson';
import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { LoginService } from 'src/app/shared/service/loginservice';
@Component({
  selector: 'app-loginform',
  template: `
  <div class="center-div">
  <app-loginform [formData]="data"></app-loginform>
   </div>
  `,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returndata:any;
  list: any;
  login:boolean;
  @Input()formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(private router: Router,private LogService: LoginService) {}

  ngOnInit() {
    this.login = false;
    let data = LoginForm;
    const formGroup = {};
    this.formData=data;
    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  else{
    console.log('hianu');
    this.LogService.login(this.form.value).subscribe(
      data => {
        console.log(data);
        this.returndata = data;
        this.list = this.returndata.enityList;
        if(this.returndata.responsecode === "0"){
         this.login = true;
         return;
        }
        else{
          if(this.returndata.responseMessage === "Invalid Login!"){
            this.login = true;
            return;
           }
         else if(this.list[0].role === 1)
          {
          this.router.navigate(['/admindashboard'])//admin
          }
         else if(this.list[0].role === 2)
          {
            console.log(this.list[0].firstName);
          this.router.navigate(['/user'],{
            queryParams : {
                firstname : this.list[0].firstName,
                lastname : this.list[0].lastName
            }
          });
          }
          else if(this.list[0].role === 3)
          {
            this.router.navigate(['/supportengineer'])
          }
         }
       });
   }
  }
  onRegister()
  {
    //console.log('login');
    this.router.navigate(['/register'])
  }
  openModal(id: string) {
    // this.modalService.open(id);
}

closeModal(id: string) {
    // this.modalService.close(id);
}
}
