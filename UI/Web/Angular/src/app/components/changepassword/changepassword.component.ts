
import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,ValidatorFn } from '@angular/forms';
import { ChangePasswordForm } from './../../shared/json/changepasswordjson';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { Router,ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-changepasswordform',
  template: `
  <div class="center-div">
  <app-changepasswordform [formData]="changepwddata"></app-changepasswordform>
   </div>
  `,
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangePasswordComponent implements OnInit {
 EmailValue : any;
 MobileValue : any;
 _id :any;
 returndata:any;
  Emailexitst : boolean;
  Mobileexitst : boolean;
  Register : boolean;
  changepwddata = ChangePasswordForm;
  @Input()formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(private RegService: RegisterService,private router: Router,private routeparams: ActivatedRoute) {}

  ngOnInit() {
    this.Emailexitst = false;
    this.Mobileexitst = false;
    this.Register = false;
   // this.showme = false;
    const formGroup = {};
    this.formData=this.changepwddata;
    this.formData.forEach(formControl => {
        console.log(formControl);
      formGroup[formControl.controlName] = new FormControl('');
    });
    this.form = new FormGroup(formGroup);
    this.routeparams.queryParams.subscribe(params => {
      this._id = params['_id'];
    });
  }
  onSumbit()
  {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  else
  {
    console.log(this.form.value);
    this.RegService.ChangePassword(this.form.value,this._id).subscribe(
      data => {
    this.router.navigate(['/login']) 
      });
  }
 }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
}
