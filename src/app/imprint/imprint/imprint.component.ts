import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
