import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
@Component({
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdminDasboardoOldComponent implements OnInit {
 Userlist:any;
 ActiveUser : any;
 ActiveCount : number = 0;
 InActiveUser : any;
 InActiveCount : number = 0;
 Msg : boolean;
 UpdateMsg : boolean;
 Updatelists : any
  constructor(private router: Router,private RegService: RegisterService,private routeparams: ActivatedRoute) {}

  ngOnInit() {
      console.log("hi");
    this.RegService.UserActiveList().subscribe(
        data => {
          console.log(data);
          this.ActiveUser = data;
          console.log(this.ActiveUser.enityList.length);
          this.ActiveCount =this.ActiveUser.enityList.length;
         });
         this.RegService.UserInActiveList().subscribe(
            data => {
              console.log(data);
              this.InActiveUser = data;
              console.log(this.InActiveUser.enityList.length);
              this.InActiveCount = this.InActiveUser.enityList.length;
             });
    
  }
  onUserList()
  {
    this.router.navigate(['/userlist'])
  }
  onRequestTicketList()
  {
    //this.router.navigate(['/register'])
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
