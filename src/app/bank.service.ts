import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  host = "http://localhost:8090";

  constructor(private httpClient:HttpClient) { }

  public addVersement(compte,numC,montant){
    return this.httpClient.post(this.host+"/transaction/ajouterVersement?compte="+compte+"&benif="+numC+"&montant="+montant,{responseType: 'text'})
  }

  public addRecharge(compte,numT,montant,operateur){
    return this.httpClient.post(this.host+"/transaction/ajouterRecharge?compte="+compte+"&benif="+numT+"&op="+operateur+"&montant="+montant,{responseType: 'text'})
  }
  public addRechargeWS(compte,data){
    return this.httpClient.post(this.host+"/transaction/ajouterRechargeWS?compte="+compte,data)
  }

  public getAccountsOfUser(uid){
    return this.httpClient.get(this.host+"/compte/getAllAccounts?uid="+uid)
  }

  public getaccountTransactions(compte_id){
    return this.httpClient.get(this.host+"/transaction/getaccountTransactions?compte_id="+compte_id)

  }

 /* public getAccountsOfUser(uid){
    return this.httpClient.get(this.host+"/compte/getAllAccounts?uid="+uid)
  }*/
}
