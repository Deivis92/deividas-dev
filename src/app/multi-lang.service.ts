import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MultiLangService {
  translateService = inject(TranslateService);

  languageSignal = signal<string>(
    window.localStorage.getItem('languageSignal') || "en"
  );

  updateLanguage(language: string): void {
    this.languageSignal.set(language);
  }

  constructor() { 
    effect(() => {
      const lang = this.languageSignal();
      window.localStorage.setItem('languageSignal', lang);
      this.translateService.use(lang);
      console.log('Language changed to:', lang);
    });
  }
}
