import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {



  contactData = {
    name: "",
    email: "",
    message: ""
  }

  isPolicyAccepted = false;
  showPrivacyError = false;


  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.isPolicyAccepted) {
      console.log('Form submitted successfully:', this.contactData);

    } else if (!this.isPolicyAccepted) {
      console.log('Privacy policy must be accepted.');
    }
  }
}




