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
  private githubApi: string;

  public navButtons: any[];
  private projects: any[];
  private projectState: any[];
  private languages: any[];

  constructor(private github: GithubService) {
    this.projectState = [];
    this.languages = [];
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

  private getYourRepos() {
    this.projects = [];
    this.github.getYourRepos().subscribe(data => {
      // Read the result field from the JSON response.
      this.projects = data.json();
      console.log(this.projects[0]);
      this.populateProjectState();
    });
  }

  private getLanguages(orderNum, url){
    // make api call
    this.github.getLanguages(url).subscribe(data => {
      // Read the result field from the JSON response.
      let subLang = [];

      Object.keys(data.json()).forEach(function(key) {
        subLang.push(key);
      });
      this.languages.splice(orderNum, 0, subLang.sort());
    });
  }

  private populateProjectState() {
    for(let i = 0; i < this.projects.length; i++) {
      this.getLanguages(i, this.projects[i].languages_url);
      this.projectState.push(1);
    }
  }

  private animateProjects(i) {
    this.projectState[i] = (this.projectState[i] === 1 ? -1 : 1);
    console.log(i,this.projectState[i]);
  }
}
