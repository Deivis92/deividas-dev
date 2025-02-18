import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillImagesFirstRow = [
    './assets/skills-img/angular.png',
    './assets/skills-img/ts.png',
    './assets/skills-img/js.png',
    './assets/skills-img/html.png',
    './assets/skills-img/css.png',
    './assets/skills-img/rest-api.png',
    './assets/skills-img/firebase.png',
    './assets/skills-img/git.png',
    './assets/skills-img/scrum.png',
    './assets/skills-img/material-design.png',
    './assets/skills-img/challenge-me.png'
    
  ];


  isChallengeHovered = false;
  isMobileView = false;

  ngOnInit(): void {
    this.isMobileView = window.innerWidth < 1250;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobileView = window.innerWidth < 1250;
  }

  onMouseOverChallenge(): void {
    this.isChallengeHovered = true;
  }
  
  onMouseOutChallenge(): void {
    this.isChallengeHovered = false;
  }




}
