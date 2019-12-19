import { Component, OnInit } from '@angular/core';
import {JsService} from "../js.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BankService} from "../bank.service";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  formControl : FormGroup;
  formControl1 : FormGroup;
  comptesUser;
  hideVers=true;
  hideRech=true;
  rechargeRequest = {
    montant:null,
    numero:null
  }
  response;

  constructor(private jsService : JsService,private router : Router,private fb:FormBuilder,private bankService : BankService) { }

  ngOnInit() {
    // sessionStorage.setItem("uid","1");

    this.jsService.load();

    this.bankService.getAccountsOfUser(sessionStorage.getItem("uid")).subscribe(data=>{
      this.comptesUser = data;
      console.log(this.comptesUser)
    });

    this.formControl=this.fb.group({
      numCompte : ['', Validators.required],
      nomBenif : ['', Validators.required],
      montantVers : ['', Validators.required],
      comptes:['',Validators.required]
    });

    this.formControl1=this.fb.group({
      operateur : ['IAM', Validators.required],
      numTel : ['', Validators.required],
      montantRech : ['', Validators.required],
      comptes:['',Validators.required]
    });
  }

  onChoose(value) {
    this.formControl.controls["comptes"].setValue(this.comptesUser[0].numCompte);
    this.formControl1.controls["comptes"].setValue(this.comptesUser[0].numCompte);
    if(value == "Versement"){
      this.hideVers = false;
      this.hideRech = true;
    }
    if(value == "Recharge Téléphonique"){
      this.hideRech = false;
      this.hideVers = true;
    }
    console.log(value)
  }

  onConfirm() {
    let numC = this.formControl.get('numCompte').value;
    let compte = this.formControl.get('comptes').value;
    let montant = this.formControl.get('montantVers').value;
    console.log(compte,numC,montant);

    this.bankService.addVersement(compte,numC,montant).subscribe( data =>{
      if(data){
        alert("Versement effecuté !");
        window.location.reload();
      }
      else{
        alert("Erreur ! Veuillez vérifier les informations saisies.")
      }
    })
  }

  onConfirmRecharge() {
    let op = this.formControl1.get('operateur').value;
    let compte = this.formControl1.get('comptes').value;
    let montant = this.formControl1.get('montantRech').value;
    let numTel = this.formControl1.get('numTel').value;
    console.log(op,compte,montant,numTel);

    this.rechargeRequest.montant = montant;
    this.rechargeRequest.numero = numTel;


    this.bankService.addRechargeWS(compte,this.rechargeRequest).subscribe(data=>{
      this.response = data;
        if(this.response.return){
          alert("Recharge effectuée !");
          window.location.reload();
        }
        else {
          alert("Une erreur est survenue.")
        }
    })
  }
}
