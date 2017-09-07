import { Component, ViewChild  } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { MdMenu, MdToolbar, MdButton, MdIcon, MdSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;
  public switchBool = 'Home';
  public columns = 3;
  public githubApi: any;
  public projects: any;
  public navButtons = [
    {
      name: "Home",
      icon: "home"
    },
    {
      name: "About",
      icon: "mood"
    },
    {
      name: "Projects",
      icon: "archive"
    }
  ];

  constructor(private http: Http) {
    this.githubApi = 'https://api.github.com/users/hubukinokaze/repos';
  }

  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);
    if (element < 1400) {
      this.columns = 2;
    }

    if (element > 1400 && element < 1700) {
      this.columns = 3;
    }

    if (element > 1700) {
      this.columns = 4;
    }

    if (element < 900) {
      this.columns = 1;
    }
  }

  setSwitchBool(page) {
    if (page === "Projects") {
      this.getYourRepos();
    }
    this.switchBool = page;
    this.sidenav.toggle();
  }

  public getYourRepos() {
    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});

    // make api call
    return (this.http.get(this.githubApi, {headers: headers})).subscribe(data => {
      // Read the result field from the JSON response.
      this.projects = data.json();
      console.log(this.projects);

    });
  }
}
