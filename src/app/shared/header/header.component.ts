import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MultiLangService } from '../../multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) { }
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  multiLangService = inject(MultiLangService);

  toggleLanguage(language: string): void {
    if (this.multiLangService.languageSignal() !== language) {
      this.multiLangService.updateLanguage(language);
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

