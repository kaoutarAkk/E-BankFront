import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-BankFront';
  hide = false
  constructor(){}

  ngOnInit(){
    if(sessionStorage.getItem("uid") != null)
    { this.hide = true }
  }
}
