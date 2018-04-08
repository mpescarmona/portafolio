import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TeamService {
  team:any[] = [];
  team_loaded:boolean = false;

  constructor( public http:Http ) {
    this.getTeamMembers();
  }

  public getTeamMembers() {
    this.http.get("https://portafolio-eeb80.firebaseio.com/team.json")
    .subscribe( data => {
      this.team = data.json();
      this.team_loaded = true;
    })
  }
}
