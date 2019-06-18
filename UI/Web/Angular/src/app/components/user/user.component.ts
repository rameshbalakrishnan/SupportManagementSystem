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
  constructor(private router: Router,private ReqService: RequestService) {}

  ngOnInit() {
    this.ReqService.UserRequestSelectAll().subscribe(
      data => {
        console.log(data);
        this.Userlist = data;
       });
  }
  onMyRequestTicketList()
  {
    //this.router.navigate(['/register'])
  }
  onLogout()
  {
      this.router.navigate(['/login'])
  }
}
