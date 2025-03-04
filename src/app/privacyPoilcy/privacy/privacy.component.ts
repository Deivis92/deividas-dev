import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})

export class PrivacyComponent implements OnInit {
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
