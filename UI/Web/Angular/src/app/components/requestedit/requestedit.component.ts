
import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { RequesteditForm } from './../../shared/json/requesteditjson';
import { RequestService } from 'src/app/shared/service/requestservice';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-registerform',
  template: `
  <div class="center-div">
  <app-registerform [formData]="regdata"></app-registerform>
   </div>
  `,
  templateUrl: './requestedit.component.html',
  styleUrls: ['./requestedit.component.css']
})
export class RequestEditComponent implements OnInit {
  EmailValue: any;
  MobileValue: any;
  _id: any;
  Email: any;
  List: any;
  returndata: any;
  Emailexitst: boolean;
  Mobileexitst: boolean;
  Register: boolean;
  reqeditdata = RequesteditForm;
  @Input() formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(private ReqService: RequestService, private router: Router, private routeparams: ActivatedRoute) { }

  ngOnInit() {
    this.Emailexitst = false;
    this.Mobileexitst = false;
    this.Register = false;
    const formGroup = {};
    this.formData = this.reqeditdata;
    this.formData.forEach(formControl => {
      console.log(formControl);
      formGroup[formControl.controlName] = new FormControl('');
    });
    this.form = new FormGroup(formGroup);
    this.routeparams.queryParams.subscribe(params => {
      this._id = params['_id'];
      console.log(params['_id']);
      this.ReqService.selectId(params['_id']).subscribe(
        data => {
          console.log(data);
          this.List = data;
          console.log(this.List);
          console.log(this.form);
          this.form.patchValue({ RequestPriority: this.List.enityList[0].requestPriority, RequestDescription: this.List.enityList[0].requestDescription, RequestShortDescription: this.List.enityList[0].requestShortDescription, RequestModule: this.List.enityList[0].requestModule });
        });
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.ReqService.Update(this.form.value, this._id).subscribe(
        data => {

          console.log(data);
          console.log('updated successfully');
          this.form.patchValue({ RequestPriority: '', RequestDescription: '', RequestShortDescription: '', RequestModule: '' });
          this.router.navigate(['admindashboard'], {
            queryParams: {
              Updatelist: 1
            }
          });
        });
    }
  }
  onLogin() {
    this.router.navigate(['/login'])
  }
  onClear() {
    this.form.reset();
  }
  onBack() {
    this.router.navigate(['/login'])
  }
}
