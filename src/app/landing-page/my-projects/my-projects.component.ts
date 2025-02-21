import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Project } from '../../models/project.model'; 
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects: Project[] = [
    {
      image: './assets/img/join.png',
      title: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'projects_text.description_join', 
      githubLink: 'https://github.com/Deivis92/Join-Deivis.git',
      websiteLink: 'https://join-276.developerakademie.net/src/pages/login.html'
    },
    {
      image: './assets/img/el-pollo.png',
      title: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'projects_text.description_game',
      githubLink: 'https://github.com/user/project-two',
      websiteLink: 'https://deividas-kondratjevas.developerakademie.net/elPolloLocoDeivis/index.html'
    },

  ];

  isMobileView = false;

  ngOnInit(): void {
    this.isMobileView = window.innerWidth < 1170;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobileView = window.innerWidth < 1170;
  }

  constructor(private sanitizer: DomSanitizer) { }


  getSafeDescription(description: string) {

    return this.sanitizer.bypassSecurityTrustHtml(description.replace(/\n/g, '<br>'));
  }

  openLink(url: string): void {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }



}
