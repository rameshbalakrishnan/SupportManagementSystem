import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router,ActivatedRoute ,Params} from '@angular/router';
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
   
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
