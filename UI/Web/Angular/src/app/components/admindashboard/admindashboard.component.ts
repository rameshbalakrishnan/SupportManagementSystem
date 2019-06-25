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
    this.ReqService.AdminRequestSelectAll().subscribe(
      data => {
        console.log(data);
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
        console.log(data);
        this.Userlist = data;
       });
  }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
  onActiveUserList()
  {

  }
  onInActiveUserList()
  {
      
  }
}
