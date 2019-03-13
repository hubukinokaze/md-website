import { Component, ViewChild  } from '@angular/core';
import { GithubService } from './services/GithubService';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public navButtons: any[];

  constructor(private github: GithubService) {
    this.navButtons = [
      {
        name: "Home",
        icon: "home",
        route: "/home"
      },
      {
        name: "About",
        icon: "mood",
        route: "/about"
      },
      {
        name: "Projects",
        icon: "archive",
        route: "/projects"
      }
    ];
  }

  private navToggle(page) {
    this.sidenav.toggle();
  }

}
