import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: any;
  login: any = {
    email:'',
    password:''
  };
  compte: any = {
    numCompte: '',
    solde: '',
    typeCompte:''
  };
public formCompte = {
  numcompte: null,
  solde: null,
  typeCompte: null,
};
public formLogin = {
  email: null,
  password: null,
};

  constructor(private router: Router, private utilisateurService: UtilisateurService) { }

  ngOnInit() {

  }

  onSaveClient(value: any) {
    if(this.formCompte.numcompte!=null && this.formCompte.solde!=null && this.formCompte.typeCompte!=null ){
      this.compte.numCompte=this.formCompte.numcompte;
      this.compte.solde=this.formCompte.solde;
      this.compte.typeCompte=this.formCompte.typeCompte;
    }
   if(this.formLogin.email!=null && this.formLogin.password!=null){
     this.login.email=this.formLogin.email;
     this.login.password=this.formLogin.password;
   }

    this.utilisateurService.saveClient(value, this.compte, this.login).subscribe(data => {
      alert("Client ajouté avec succès ");
      this.router.navigateByUrl('/allClient');
    }, err => {
      console.log(err)
    })
  }

}
