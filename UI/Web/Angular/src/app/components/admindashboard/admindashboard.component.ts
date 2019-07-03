import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { RequestService } from 'src/app/shared/service/requestservice';
@Component({
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdminDasboardComponent implements OnInit {
  Firstname : string;
  Lastname : string;
  _id : any;
 Userlist:any;
 ActiveUser : any;
 ActiveCount : number = 0;
 InActiveUser : any;
 InActiveCount : number = 0;
 Msg : boolean;
 UpdateMsg : boolean;
 Updatelists : any
  constructor(private router: Router,private ReqService: RequestService,private routeparams: ActivatedRoute) {}

  ngOnInit() {
    this.routeparams.queryParams.subscribe(params => {
      this.Firstname = params['firstname'];
      this.Lastname = params['lastname'];
      this._id = params['_id'];
    });
    this.ReqService.AdminRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
       });
  }
  onUserList()
  {
    this.router.navigate(['/userlist'])
  }
  onRequestTicketList()
  {
    this.ReqService.AdminRequestSelectAll().subscribe(
      data => {
        this.Userlist = data;
       });
  }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
  onUpdate(_id)
  {
    this.router.navigate(['requestedit'], {
      queryParams: {
        _id:  _id
      }
    });
  }
  onActiveUserList()
  {

  }
  onInActiveUserList()
  {
      
  }
  onProfileView()
  {
    console.log(this._id);
    this.router.navigate(['/profile'],{
      queryParams : {
        _id : this._id
      }
    });
  }
}
