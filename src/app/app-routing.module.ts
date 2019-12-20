import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';

import {OperationComponent} from "./operation/operation.component";
import {OpHistoryComponent} from "./op-history/op-history.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LoginAgentComponent} from "./agent/login-agent/login-agent.component";
import {AddClientComponent} from "./pages/client/add-client/add-client.component";
import {AllClientComponent} from "./pages/client/all-client/all-client.component";
import {AuthAdminService} from "./services/auth-admin.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {CompteComponent} from "./pages/compte/compte.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent ,canActivate:[AuthGuardService]},
  { path: 'operation' , component: OperationComponent},
  { path: 'historique' , component: OpHistoryComponent ,canActivate:[AuthGuardService]},
  { path: 'login' , component: LoginComponent},
  { path: 'agent' , component: LoginAgentComponent},
  { path: 'addClient' , component: AddClientComponent ,canActivate:[AuthAdminService]},
  { path: 'allClient' , component: AllClientComponent ,canActivate:[AuthAdminService]},
  { path: 'compteClient/:id' , component: CompteComponent ,canActivate:[AuthAdminService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
