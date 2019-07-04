import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit {
  _id: any;
  List: any;
  Cmt: any;
  constructor(private routeparams: ActivatedRoute, private RegService: RegisterService, private router: Router) { }
  ngOnInit() {
    this.routeparams.queryParams.subscribe(params => {
      this._id = params['_id'];
      this.Cmt = params['userlist'];
      this.RegService.selectId(params['_id']).subscribe(
        data => {
          console.log(data);
          this.List = data;
        });
    });
  }
  onHome() {
  }
  onLogout() {
    this.router.navigate(['/login'])
  }
  onBack() {
    if (this.Cmt === 'userlist') {
      this.router.navigate(['/userlist'])
    }
    else {
    }
  }
  onUpdate(_id) {
    console.log(_id);
    this.router.navigate(['profileedit'], {
      queryParams: {
        _id: _id
      }
    });
  }
  onChangePassword(_id) {
    this.router.navigate(['/changepassword'], {
      queryParams: {
        _id: _id
      }
    });
  }
}
