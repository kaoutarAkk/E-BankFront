import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ClientService} from "./client.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login: any;
  user: any;
  email:any;
  pass:any;
  idLogin:any;
  isClient:boolean;


  constructor(private http: HttpClient, private router: Router,private clientService : ClientService) {

  }

  authenticate(email, password) {
    this.clientService.getLoginByEmail(email).subscribe(data=>{
          if (data) {
            this.login = data;
            this.idLogin = this.login.id;
            this.email = true;
            this.clientService.IsClient(this.idLogin).subscribe(data=>{
              this.isClient=data
              console.log("isClient "+this.isClient)
            });
            this.clientService.checkPassword(email, password)
              .subscribe(data => {
                this.pass = data;
                console.log("checkPass "+data)
                if (data) {
                  if (this.isClient) {
                  this.clientService.getclientbylogin(email).subscribe(data => {
                    this.user = data;
                    sessionStorage.setItem('uid', this.user.id);
                  }, err => {
                    console.log(err)
                  });
                  setTimeout(() => {
                    this.router.navigateByUrl("/home");}, 1000);
                  setTimeout(() => {
                    window.location.reload();}, 1500);


                }else{
                    sessionStorage.setItem("admin","true");

                  }
              }

              }, error => {
                console.log(error);
              });

          }
        },err=>{
          console.log(err)
        })
    return (this.email && this.pass);
        }



  isUserLoggedIn() {
    let user = sessionStorage.getItem('id');
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
  isAdmin(){
    let admin = sessionStorage.getItem("admin")
    if(admin != null)
      return true;
    else
      return false;
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }

  /*getLoggedInUser() {
    sessionStorage.setItem('username', this.lgin);
    this.clientService.getclientbylogin(sessionStorage.getItem('username'))
      .subscribe(data => {
        this.user = data;
        sessionStorage.setItem('user_id', this.user.id);
      },err=>{
        console.log(err)
      });
  }*/
}
