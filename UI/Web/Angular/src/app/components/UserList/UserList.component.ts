import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
@Component({
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})
export class UserListComponent implements OnInit {
 Userlist:any;
 Msg : boolean;
 UpdateMsg : boolean;
 Updatelists : any
  constructor(private router: Router,private RegService: RegisterService,private routeparams: ActivatedRoute) {}

  ngOnInit() {
    this.Msg = false;
    this.UpdateMsg = false;
    this.routeparams.queryParams.subscribe(params => {
      this.Updatelists = params['Updatelist'];
      if(params['Updatelist'] == 1)
      {
        this.UpdateMsg = true;
      }
    });
    this.RegService.SelectAll().subscribe(
      data => {
        console.log(data);
        this.Userlist = data;
        console.log(this.Userlist.enityList.length);
       });
  }
  onUserList()
  {
    this.RegService.SelectAll().subscribe(
        data => {
          console.log(data);
          this.Userlist = data;
          console.log(this.Userlist.enityList.length);
         });
  }
  onDelete(email)
  {
    this.RegService.delete(email).subscribe(
      data => {
        this.RegService.SelectAll().subscribe(
          data => {
            console.log(data);
            this.Userlist = data;
            console.log(this.Userlist.enityList.length);
           });
           this.Msg = true;
       });
  }
  onUpdate(email)
  {
    console.log(email);
    this.router.navigate(['useredit'], {
      queryParams: {
        email:  email
      }
    });
  }
  onRequestTicketList()
  {
    this.RegService.SelectAll().subscribe(
      data => {
        console.log(data);
        this.Userlist = data;
        console.log(this.Userlist.enityList.length);
       });
  }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
  onBack()
  {
    this.router.navigate(['/admindashboard']) 
  }
}
