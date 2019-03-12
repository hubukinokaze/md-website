import { Component } from '@angular/core';
import { animate, keyframes, query, style, transition, trigger } from '@angular/animations';

@Component({
  styleUrls: ['../../app.component.css'],
  template: `
    <div class="column-center-container">
      <div class="about-container">
        <div class="header-container" @fadeIn3>
          <h1 class="header-content">About Me</h1>
        </div>
        <div class="about-content">
          <div class="about-content-width">
            <div class="about-main">
              <p>
                Irvine, CA<br>
                yudai.j.kawa@gmail.com
              </p>
            </div>

            <hr class="style1"/>

            <h3>Software Engineer</h3>
            <p>Passionate and motivated UC Irvine graduate looking to collaborate with like-minded professionals and transform the future of UI/UX as an entry-level developer.</p>

            <h3>Education</h3>
            <p>
              University of California, Irvine | Irvine, CA	June 2016<br>
              Bachelor of Science in Informatics – Human Computer Interaction
            </p>

            <h3>Technologies</h3>
            <div>
              <img class="tech-images" src="../../assets/img/skills/angular.png">
              <img class="tech-images" src="../../assets/img/skills/html.png">
              <img class="tech-images" src="../../assets/img/skills/js.png">
              <img class="tech-images" src="../../assets/img/skills/css.png">
              <img class="tech-images" src="../../assets/img/skills/node.png">
              <img class="tech-images" src="../../assets/img/skills/ionic.png">
              <img class="tech-images" src="../../assets/img/skills/nativescript.png">
              <img class="tech-images" src="../../assets/img/skills/electron.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn3', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0 }),
          animate('500ms cubic-bezier(.95,1.2,1,.88)', keyframes([
            style({opacity: 0, transform: 'translateY(-350%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(-200%)', offset: 0.2}),
            style({opacity: 1, transform: 'translateY(-100%)', offset: 0.4}),
            style({opacity: 1, transform: 'translateY(-20%)',  offset: 0.7}),
            style({opacity: 1, transform: 'translateY(15px)',  offset: 0.9}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ]))
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent {
  private profileState: string;

  constructor () {
    this.profileState = '1';
  }

  private animateSlide() {
    this.profileState = (this.profileState === '1' ? '2' : '1');
  }
}
