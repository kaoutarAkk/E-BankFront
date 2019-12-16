import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private host:string="http://localhost:8090/";

  constructor(private httpClient:HttpClient) { }

  public checkPassword(email,password):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/checkPwd?email="+email+"&password="+password)
  }
  public IsAgent(id):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/isAgent?id="+id);
  }

  public getclientbylogin(email){
    return this.httpClient.get(this.host+"clients/bylogin?email="+email);
  }

  public getLoginByEmailAndPass(email,pass){
    return this.httpClient.get(this.host+"logins/ByEmailAndPass?email"+email+"&pass"+pass);
  }

  public existsEmail(email):Observable<boolean>{
    return this.httpClient.get<boolean>(this.host+"logins/existsEmail?email="+email)
  }
}
