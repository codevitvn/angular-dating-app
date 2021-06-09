import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_model/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }
  
  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout(){
    this.accountService.logout();
  }
}
