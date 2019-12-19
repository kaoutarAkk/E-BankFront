import { Component, OnInit } from '@angular/core';
import {BankService} from "../bank.service";

@Component({
  selector: 'app-op-history',
  templateUrl: './op-history.component.html',
  styleUrls: ['./op-history.component.css']
})
export class OpHistoryComponent implements OnInit {
  uid;
  compte: any;
  transactions: any;
  compteId;
  constructor(private  service: BankService) {

  }

  ngOnInit() {
    // sessionStorage.setItem("uid","1");

    this.uid = sessionStorage.getItem("uid");
    this.service.getAccountsOfUser(this.uid).subscribe(data=>{

      this.compte=data;
      this.compteId = this.compte[0].id;
      //console.log(this.compteId);
      this.service.getaccountTransactions(this.compteId).subscribe(data1 =>{
        this.transactions=data1;
      },err1=>{
        console.log(err1)
      })

    },err=>{
      console.log(err)
    })

  }

}
