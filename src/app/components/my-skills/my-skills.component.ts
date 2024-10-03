import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
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
    
  ];

  skillImagesSecondRow = [
    './assets/skills-img/firebase.png',
    './assets/skills-img/git.png',
    './assets/skills-img/scrum.png',
    './assets/skills-img/material-design.png',
    './assets/skills-img/challenge-me.png',
  ];

  isChallengeHovered = false;

  onMouseOverChallenge(): void {
    this.isChallengeHovered = true;
  }
  
  onMouseOutChallenge(): void {
    this.isChallengeHovered = false;
  }




}
