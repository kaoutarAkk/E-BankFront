import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private host:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public checkPassword(email,password):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/checkPwd?email="+email+"&password="+password)
  }
  public IsClient(id):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/isClient?id="+id);
  }
  public IsAgent(id):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/isAgent?id="+id);
  }

  public getclientbylogin(email){
    return this.httpClient.get(this.host+"clients/bylogin?email="+email);
  }

  public getLoginByEmail(email){
    return this.httpClient.get(this.host+"logins/byEmail?email="+email);
  }

  public existsEmail(email):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/existsEmail?email="+email)
  }
}
