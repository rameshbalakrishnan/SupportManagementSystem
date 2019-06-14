import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 Userlist:any;
  constructor(private router: Router,private RegService: RegisterService) {}

  ngOnInit() {
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
  onRequestTicketList()
  {
    //this.router.navigate(['/register'])s
  }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
}
