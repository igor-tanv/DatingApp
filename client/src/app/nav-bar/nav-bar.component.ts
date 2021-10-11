import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  model: any = {}
  loggedIn: boolean = false

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.accountService.login(this.model).subscribe(res => {
      console.log(res)
      this.loggedIn = true
    }, error => {
      console.log(error)
    })
  }

  logout(): void {
    this.loggedIn = false
  }

}
