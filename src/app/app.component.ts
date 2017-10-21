import { Component, ViewChild  } from '@angular/core';
import { GithubService } from './services/GithubService';
import { MdMenu, MdToolbar, MdButton, MdIcon, MdSidenav} from '@angular/material';
import { trigger,style,transition,animate,keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;
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
    if (page === "Projects") {
      this.getYourRepos();
    }
    this.sidenav.toggle();
  }

}
