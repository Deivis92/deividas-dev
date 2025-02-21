import { Routes } from '@angular/router';
import { AboutMeComponent } from './landing-page/about-me/about-me.component';
import { MainContentComponent } from './landing-page/main-content/main-content.component';

export const routes: Routes = [
    {
        path: '', component: MainContentComponent
    }
];
