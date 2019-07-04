import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { RequestService } from 'src/app/shared/service/requestservice';
@Component({
  templateUrl: './supportengineer.component.html',
  styleUrls: ['./supportengineer.component.scss']
})
export class SupportEngineerComponent implements OnInit {
  Firstname: string;
  Lastname: string;
  _id: any;
  Userlist: any;
  constructor(private router: Router, private ReqService: RequestService, private routeparams: ActivatedRoute) { }

  ngOnInit() {
    this.routeparams.queryParams.subscribe(params => {
      this.Firstname = params['firstname'];
      this.Lastname = params['lastname'];
      this._id = params['_id']
    });
    this.ReqService.SupportEngineerRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
      });
  }
  onMyAssignRequestTicketList() {
    this.ReqService.SupportEngineerRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
      });
  }
  onLogout() {
    this.router.navigate(['/login'])
  }
  onProfileView() {
    this.router.navigate(['/profile'], {
      queryParams: {
        _id: this._id
      }
    });
  }
}
