import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './landing-page/main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint/imprint.component';
import AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainContentComponent, FooterComponent, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'deividas-dev';

  ngOnInit() {
    AOS.init();
  }
}
