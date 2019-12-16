import { Component, OnInit } from '@angular/core';
import {JsService} from "../js.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jsService : JsService) { }

  ngOnInit() {
    this.jsService.load()
  }

}
