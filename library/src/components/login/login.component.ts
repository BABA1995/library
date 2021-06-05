import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
    name =new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]{6}[a-z0-9]{0,9}$')])
    password =new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern('^[a-zA-Z]{6}[a-z0-9]{0,2}$')])



  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  onlogin(){
    console.log("hi");
this.route.navigateByUrl('search')
  }
}
