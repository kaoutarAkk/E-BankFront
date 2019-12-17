import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { OperationComponent } from './operation/operation.component';
import { OpHistoryComponent } from './op-history/op-history.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginAgentComponent } from './agent/login-agent/login-agent.component';
import {EditClientComponent} from "./pages/client/edit-client/edit-client.component";
import {AllClientComponent} from "./pages/client/all-client/all-client.component";
import {AddClientComponent} from "./pages/client/add-client/add-client.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    OperationComponent,
    OpHistoryComponent,
    OpHistoryComponent,
    HomeComponent,
    LoginComponent,
    LoginAgentComponent,
    AddClientComponent,
    AllClientComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent,OpHistoryComponent]
})
export class AppModule { }
