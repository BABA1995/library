import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  onlogin(){
    console.log("hi");
this.route.navigateByUrl('search');
  }
}
