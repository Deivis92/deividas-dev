import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  };

  mailTest = true;

  post = {
    endPoint: 'http://deividas-kondratjevas.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isPolicyAccepted = false;
  showPrivacyError = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && this.isPolicyAccepted) {
      const formData = {
        name: this.contactData.name,
        email: this.contactData.email,
        message: this.contactData.message
      };

     
      console.log('Sending form data:', formData);

      this.http.post(this.post.endPoint, this.post.body(formData), this.post.options)
        .subscribe({
          next: response => {
            console.log('Form successfully submitted:', response);
          },
          error: error => {
            console.error('Error during form submission:', error);
          },
          complete: () => {
            console.log('Request completed.');
          }
        });
    } else if (!this.isPolicyAccepted) {
      console.log('Privacy policy must be accepted.');
    }
  }
}
