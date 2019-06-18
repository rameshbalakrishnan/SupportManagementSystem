import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
import { RegisterService } from 'src/app/shared/service/registerservice';
import { RequestService } from 'src/app/shared/service/requestservice';
@Component({
  templateUrl: './supportengineer.component.html',
  styleUrls: ['./supportengineer.component.scss']
})
export class SupportEngineerComponent implements OnInit {
  Userlist:any;
  constructor(private router: Router,private ReqService: RequestService) {}

  ngOnInit() {
    this.ReqService.SupportEngineerRequestSelectAll().subscribe(
      data => {
        console.log(data);
        this.Userlist = data;
       });
  }
  onMyAssignRequestTicketList()
  {
    //this.router.navigate(['/register'])
  }
  onLogout()
  {
    this.router.navigate(['/login']) 
  }
}
