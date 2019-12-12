import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsService {

  loadAPI: Promise<any>;
  urls = [
    'assets/js/jquery-2.2.3.min.js',
    'assets/js/move-top.js',
    'assets/js/easing.js',
    'assets/js/SmoothScroll.min.js',
    'assets/js/responsiveslides.min.js',
    'assets/js/bootstrap.js'

  ];

  constructor() { }

  public load(){
    this.loadAPI = new Promise(resolve => {
      // console.log("resolving promise...");
      this.loadScript();
    });
  }

  public loadScript() {
    let isFound = false;
    let scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {

      for (let i = 0; i < this.urls.length; i++) {
        let node = document.createElement('script');
        node.src = this.urls [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }
}
