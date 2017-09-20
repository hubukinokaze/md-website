import { Component, ViewChild  } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { MdMenu, MdToolbar, MdButton, MdIcon, MdSidenav} from '@angular/material';
import { trigger,state,style,transition,animate,keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* <=> *', [
        animate('1200ms cubic-bezier(.5, 0, .5, 1)', keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.2}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 0.3}),
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.8}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])
    ]),
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate(500, style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('twirl', [
      transition('* <=> *', [
        animate('1200ms cubic-bezier(.5, 0, .5, 1)', keyframes([
          style({opacity: 1, transform: 'rotateY(0deg)',     offset: 0}),
          style({opacity: 1, transform: 'rotateY(360deg)', offset: 0.2}),
          style({opacity: 1, transform: 'rotateY(0deg)',  offset: 0.3}),
          style({opacity: 1, transform: 'rotateY(360deg)', offset: 0.5}),
          style({opacity: 1, transform: 'rotateY(0deg)',  offset: 0.8}),
          style({opacity: 1, transform: 'rotateY(360deg)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})

export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;
  private githubApi: string;
  private profileState: string;
  private switchBool: string;

  private navButtons: any[];
  private projects: any[];
  private projectState: any[];

  constructor(private http: Http) {
    this.githubApi = 'https://api.github.com/users/hubukinokaze/repos';
    this.switchBool = 'Home';
    this.profileState = '1';
    this.projectState = [];
    this.navButtons = [
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
  }

  private setSwitchBool(page) {
    if (page === "Projects") {
      this.getYourRepos();
    }
    this.switchBool = page;
    this.sidenav.toggle();
  }

  private getYourRepos() {
    this.projects = [];

    // create headers
    let headers = new Headers({'Content-Type': 'application/json'});

    // make api call
    return (this.http.get(this.githubApi, {headers: headers})).subscribe(data => {
      // Read the result field from the JSON response.
      this.projects = data.json();
      this.populateProjectState();
    });
  }

  private populateProjectState() {
    for(let i = 0; i < this.projects.length; i++) {
      this.projectState.push(1);
    }
  }

  private animateSlide() {
    this.profileState = (this.profileState === '1' ? '2' : '1');
  }

  private animateProjects(i) {
    this.projectState[i] = (this.projectState[i] === 1 ? -1 : 1);
    console.log(i,this.projectState[i]);
  }
}
