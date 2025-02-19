import { Component } from '@angular/core';
import { Comment } from '../../models/comments.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  comments: Comment[] = [{
    name: 'Noah Müller',
    title: 'Project Join',
    description: 'teamplayer.JOIN'
  },

  {
    name: 'Evelyn Marx',
    title: 'El Pollo Loco',
    description: 'teamplayer.LOCO'
  },
  {
    name: 'James Rugman',
    title: 'DABubble',
    description: 'teamplayer.DABUBLE',
  }
  ];
}
