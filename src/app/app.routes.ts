import { Routes } from '@angular/router';
import { AboutMeComponent } from './landing-page/about-me/about-me.component';
import { MainContentComponent } from './landing-page/main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint/imprint.component';
import { PrivacyComponent } from './privacyPoilcy/privacy/privacy.component';

export const routes: Routes = [
    {
        path: '', component: MainContentComponent
    },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyComponent }
];
