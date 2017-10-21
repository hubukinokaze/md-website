import { Component } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  styleUrls: ['../../app.component.css'],
  template: `
    <div class="column-center-container">
      <md-card class="profile-card" [@slideInOut]="profileState" (click)="animateSlide()">
        <md-card-header class="card-header">
          <div md-card-avatar class="profile-img"></div>
          <md-card-title class="card-title">Jun Kawa</md-card-title>
          <md-card-subtitle>Angular Developer</md-card-subtitle>
        </md-card-header>
        <img md-card-image src="../../assets/img/profile-card-bg-img.jpg">

        <md-card-content>
          <p>Front-End Developer with passion for writing clean and efficient code.</p>
        </md-card-content>
      </md-card>
    </div>
  `,
  animations: [
    trigger('slideInOut', [
      transition('1 <=> 2', [
        animate('1200ms cubic-bezier(.5, 0, .5, 1)', keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.2}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 0.3}),
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.8}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class HomeComponent {
  public profileState: string;

  constructor () {
    this.profileState = '1';
  }

  public animateSlide() {
    this.profileState = (this.profileState === '1' ? '2' : '1');
  }
}
