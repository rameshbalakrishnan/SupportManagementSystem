import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { RequestService } from 'src/app/shared/service/requestservice';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  Userlist:any;
  Firstname : string;
  Lastname : string;
  _id : any;
  constructor(private router: Router,private ReqService: RequestService,private routeparams: ActivatedRoute) {}

  ngOnInit() {
    this.routeparams.queryParams.subscribe(params => {
      this.Firstname = params['firstname'];
      this.Lastname = params['lastname'];
      this._id = params['_id'];
    });
    this.ReqService.UserRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
       });
  }
  onMyRequestTicketList()
  {
    this.ReqService.UserRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
       });
  }
  onLogout()
  {
      this.router.navigate(['/login'])
  }
  onProfileView()
  {
    this.router.navigate(['/profile'],{
      queryParams : {
        _id : this._id
      }
    });
  }
}
