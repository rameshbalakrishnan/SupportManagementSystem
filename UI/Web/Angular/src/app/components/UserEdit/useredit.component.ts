
import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { UserEditForm } from './../../shared/json/usereditjson';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-registerform',
  template: `
  <div class="center-div">
  <app-registerform [formData]="usereditdata"></app-registerform>
   </div>
  `,
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UserEditComponent implements OnInit {
  EmailValue: any;
  MobileValue: any;
  _id: any;
  List: any;
  returndata: any;
  Emailexitst: boolean;
  Mobileexitst: boolean;
  Register: boolean;
  usereditdata = UserEditForm;
  @Input() formData: FormData[];
  form: FormGroup;
  submitted: boolean;

  constructor(private RegService: RegisterService, private router: Router, private routeparams: ActivatedRoute) { }

  ngOnInit() {

    this.Emailexitst = false;
    this.Mobileexitst = false;
    this.Register = false;
    // this.showme = false;
    const formGroup = {};
    this.formData = this.usereditdata;
    this.formData.forEach(formControl => {
      console.log(formControl);
      formGroup[formControl.controlName] = new FormControl();
      this.form = new FormGroup(formGroup);
    });
    this.routeparams.queryParams.subscribe(params => {
      this._id = params['_id'];
      console.log(params['_id']);
      this.RegService.selectId(params['_id']).subscribe(
        data => {
          console.log(data);
          this.List = data;
          console.log(this.List);
          console.log(this.form);
          this.form.patchValue({ firstName: this.List.enityList[0].firstName, LastName: this.List.enityList[0].lastName, Email: this.List.enityList[0].email, Mobile: this.List.enityList[0].mobile });
        });
    });
  }
  onBack() {
    this.router.navigate(['userlist'])
  }
  submitForm() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.RegService.update(this.form.value, this._id).subscribe(
        data => {
          console.log(data);
          console.log('updated successfully');
          this.form.patchValue({ firstName: '', LastName: '', Email: '', Mobile: '' });
          this.router.navigate(['userlist'], {
            queryParams: {
              Updatelist: 1
            }
          });
        });
    }
  }
  onLogout() {
    this.router.navigate(['/login'])
  }
}
