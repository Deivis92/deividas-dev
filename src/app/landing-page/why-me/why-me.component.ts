import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  kofferImageUrl: string = './assets/icons/koffer.png';
  remoteImageUrl: string = './assets/icons/WiFi.png';

  onKofferHover(isHovered: boolean) {
    this.kofferImageUrl = isHovered ? './assets/icons/koffer-2.png' : './assets/icons/koffer.png';
  }

  // Hover methods for Remote image
  onRemoteHover(isHovered: boolean) {
    this.remoteImageUrl = isHovered ? './assets/icons/WiFi2.png' : './assets/icons/WiFi.png';
  }

}
