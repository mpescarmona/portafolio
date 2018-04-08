import { Component} from '@angular/core';
import { SiteinfoService } from '../../services/siteinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _siteInfoService:SiteinfoService,
              private router:Router) {
  }

  searchProduct( searchText:string ) {
    // console.log(searchText);
    this.router.navigate(['search', searchText]);
  }
}
