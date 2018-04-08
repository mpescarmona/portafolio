import { Component } from '@angular/core';
import { SiteinfoService } from '../../services/siteinfo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  anio:number = new Date().getFullYear();
  constructor(public _siteInfoService:SiteinfoService) {
  }

}
