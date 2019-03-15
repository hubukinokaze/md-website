import { Component } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  styleUrls: ['../../app.component.css'],
  template: `
    <div class="column-center-container">
      <mat-card class="profile-card" [@slideInOut]="profileState" (click)="animateSlide()">
        <mat-card-header class="card-header">
          <div mat-card-avatar class="profile-img"></div>
          <mat-card-title class="card-title">Yudai Jun Kawa</mat-card-title>
          <mat-card-subtitle>Software Developer</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="../../assets/img/profile-card-bg-img.jpg">

        <mat-card-content>
          <span>{{ introLabel }}</span> <span [ngClass]="introHook['style']">{{ introHook['name'] }}</span>
        </mat-card-content>
      </mat-card>
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
  public hooks: Array<{}> = [];
  public hookIndex: number = 0;

  // labels
  public introLabel: string;
  public introHook: any;

  constructor () {
    this.profileState = '1';
    this.introLabel = 'Front-End Developer with a passion for ';
    this.hooks = [
      {
        name: 'writing clean and efficient code.',
        style: 'color-blue'
      }, {
        name: 'solving challenging code.',
        style: 'color-red'
      }, {
        name: 'building with new technologies.',
        style: 'color-gray'
      }, {
        name: 'taking down big problems.',
        style: 'color-brown'
      }
    ];
    this.introHook = this.hooks[this.hookIndex];

    this.createIntroInterval();
  }

  private createIntroInterval() {
    // repeat with the interval of 3 seconds
    setInterval(() => {
      this.hookIndex++;
      this.hookIndex = this.hookIndex % this.hooks.length;
      this.introHook = this.hooks[this.hookIndex];
    }, 3000);
  }

  public animateSlide() {
    this.profileState = (this.profileState === '1' ? '2' : '1');
  }
}
