import { Component, OnInit } from '@angular/core';
import { SiteinfoService } from '../../services/siteinfo.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor(public _siteInfoService:SiteinfoService,
              public _teamService:TeamService) {
  }
}
