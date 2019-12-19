import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BankService} from "../../bank.service";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  id:any;
  compteId: any;
  compte: any;
  transactions: any;

  constructor(private route:ActivatedRoute, private service: BankService) { }

  ngOnInit() {

   this.id= this.route.snapshot.params.id;
    this.service.getAccountsOfUser(this.id).subscribe(data=>{
      this.compte=data;
      console.log(this.compte)
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
