import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  host = "http://localhost:8090/";

  constructor(private httpClient: HttpClient) {
  }

  public getAllClients() {
    return this.httpClient.get(this.host + 'clients/allClients');
  }

  public saveClient(client, compte, login) {
    client.login = login;
    client.compte = compte;
    return this.httpClient.post(this.host + 'clients/saveClient', client);
  }

  public DeleteClient(id) {
    return this.httpClient.delete(this.host + 'clients/deleteClientById?id=' + id);
  }
}

