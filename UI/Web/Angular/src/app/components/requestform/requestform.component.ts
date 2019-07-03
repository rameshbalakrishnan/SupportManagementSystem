
import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,ValidatorFn } from '@angular/forms';
import { RequestForm } from './../../shared/json/requestjson';
import { RequestService } from 'src/app/shared/service/requestservice';
import { Router,ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-requestform',
  template: `
  <div class="center-div">
  <app-requestform [formData]="reqdata"></app-requestform>
   </div>
  `,
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestComponent implements OnInit {
 EmailValue : any;
 MobileValue : any;
 Email :any;
 returndata:any;
  Emailexitst : boolean;
  Mobileexitst : boolean;
  Register : boolean;
  reqdata = RequestForm;
  @Input()formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(private ReqService: RequestService,private router: Router,private routeparams: ActivatedRoute) {}

  ngOnInit() {
    this.Emailexitst = false;
    this.Mobileexitst = false;
    this.Register = false;
   // this.showme = false;
    const formGroup = {};
    this.formData=this.reqdata;
    this.formData.forEach(formControl => {
        console.log(formControl);
      formGroup[formControl.controlName] = new FormControl('');
    });
    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
  else
  {
    this.ReqService.Add(this.form.value).subscribe(
      data => {
      console.log(data);
      });
  }
  }
  onLogin()
  {
    this.router.navigate(['/login']) 
  }
  onClear()
  {
    this.form.reset();
  }
  onBack()
  {
    this.router.navigate(['/login']) 
  }
}
