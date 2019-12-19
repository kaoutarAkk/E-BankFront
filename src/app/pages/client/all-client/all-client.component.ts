import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.css']
})
export class AllClientComponent implements OnInit {
  clients:any;

  constructor(private clientService: UtilisateurService , private router: Router) { }

  ngOnInit() {

    this.clientService.getAllClients().subscribe(data => {

        this.clients = data
      }
      , err => {
        console.log(err);
      });
  }

  onDeleteClient(id: any) {
    const conf = confirm('Etes vous sur de vouloir supprimer ce client son compte et son login seront aussi suprimmés?');
    if (conf) {
      this.clientService.DeleteClient(id).subscribe(data => {
        alert('Client supprimé!');
        window.location.reload();
      }, err => {
        console.log(err)
      });
    }

  }

  onClickCompte(uid: any) {
    this.router.navigateByUrl("compteClient/"+uid);


  }
}
