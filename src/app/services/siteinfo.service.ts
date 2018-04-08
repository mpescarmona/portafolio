import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SiteinfoService {
  info: any = {};
  info_loaded: boolean = false;

  constructor(public http: Http) {
    this.getInfo();
  }

  public getInfo() {
    this.http.get('https://portafolio-eeb80.firebaseio.com/siteInfo.json')
    .subscribe( data => {
      this.info = data.json();
      this.info_loaded = true;
    });
  }
}
