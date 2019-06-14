import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
@Component({
  templateUrl: './supportengineer.component.html',
  styleUrls: ['./supportengineer.component.scss']
})
export class SupportEngineerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
   
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
