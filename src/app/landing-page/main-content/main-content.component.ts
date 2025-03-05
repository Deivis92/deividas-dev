import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { TeamplayerComponent } from '../teamplayer/teamplayer.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import AOS from "aos";


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    TeamplayerComponent,
    ContactMeComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
