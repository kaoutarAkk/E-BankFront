import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-BankFront';
  hide = false
  constructor(public router : Router){}

  ngOnInit(){
    if(sessionStorage.getItem("uid") != null)
    { this.hide = true }

  }
}
