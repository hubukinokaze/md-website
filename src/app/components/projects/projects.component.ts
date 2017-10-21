import { Component } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  styleUrls: ['../../app.component.css'],
  template: `
    <div>
      <div class="project-container" [@fadeIn]="projectState?.length">
        <md-card *ngFor="let project of projects; let i = index" class="project-card" [attr.id]="i"
                 (click)="animateProjects(i)" [@twirl]="projectState[i]">
          <h1 class="card-title">
            <a href="{{ project.html_url }}">{{ project?.name }}</a>
          </h1>
          <md-card-subtitle>
            {{ project?.description }}
          </md-card-subtitle>
          <md-divider></md-divider>
          <md-list class="language-list" [@fadeIn2]="languages[i]?.length">
            <div class="language-tags" *ngFor="let language of languages[i]">{{ language }}</div>
          </md-list>
          <img md-card-image src="../../assets/img/angular-stock.jpg">
        </md-card>
      </div>
    </div>
  `,
  animations: [
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
    trigger('fadeIn2', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(400, [
            animate(700, style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('twirl', [
      transition('1 <=> -1', [
        animate('1200ms cubic-bezier(.5, 0, .5, 1)', keyframes([
          style({transform: 'rotateY(0deg)',   offset: 0}),
          style({transform: 'rotateY(360deg)', offset: 0.2}),
          style({transform: 'rotateY(0deg)',   offset: 0.3}),
          style({transform: 'rotateY(360deg)', offset: 0.5}),
          style({transform: 'rotateY(0deg)',   offset: 0.8}),
          style({transform: 'rotateY(360deg)', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class ProjectsComponent { }
