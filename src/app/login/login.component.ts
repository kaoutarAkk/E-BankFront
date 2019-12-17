import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  ok: boolean = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
      this.authService.authenticate(this.email,this.password);
      /*this.router.navigateByUrl("/home");*/
    setTimeout(()=>{this.ok = this.authService.authenticate(this.email,this.password)},1000)
      console.log(sessionStorage.getItem('id'))
  }
}
