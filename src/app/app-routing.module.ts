import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {OperationComponent} from "./operation/operation.component";
import {OpHistoryComponent} from "./op-history/op-history.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'operation' , component: OperationComponent},
  { path: 'historique' , component: OpHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
