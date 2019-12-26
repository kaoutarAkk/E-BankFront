import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin:any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin=this.authService.isAdmin();
  }

  logout() {
    this.authService.logOut();
  }
}
