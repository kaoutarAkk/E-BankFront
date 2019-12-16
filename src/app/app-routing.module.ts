import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {OperationComponent} from "./operation/operation.component";
import {OpHistoryComponent} from "./op-history/op-history.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LoginAgentComponent} from "./agent/login-agent/login-agent.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'operation' , component: OperationComponent},
  { path: 'historique' , component: OpHistoryComponent},
  { path: 'home' , component: HeaderComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'agent' , component: LoginAgentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
