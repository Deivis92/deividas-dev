import { Component } from '@angular/core';
import { Comment } from '../../models/comments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
  comments: Comment[] = [{
    name: 'Noah Müller',
    title: 'Project Join',
    description: 'Deividas had to develop,format and deliver content in collaboartion with the team members.He is a reliable and friendly person.',
  },
  {
    name: 'Evelyn Marx',
    title: 'El Pollo Loco',
    description: 'He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
  },
  {
    name: 'James Rugman',
    title: 'DABubble',
    description: 'He is reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.',
  }



  ];

}
