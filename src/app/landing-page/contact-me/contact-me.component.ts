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
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
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
    if (ngForm.submitted && ngForm.form.valid) {
      if (this.isPolicyAccepted && !this.mailTest) {
        // Wenn das Formular gültig ist und die Datenschutzrichtlinie akzeptiert wurde,
        // sende die POST-Anfrage an den Server
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              // Formular nach erfolgreichem Senden zurücksetzen
              ngForm.resetForm();
            },
            error: (error) => {
              console.error('Fehler beim Senden:', error);
            },
            complete: () => {
              console.info('POST-Anfrage abgeschlossen');
            }
          });
      } else if (this.mailTest) {
        // Wenn die Mail-Testbedingung zutrifft, setze das Formular zurück
        ngForm.resetForm();
      } else if (!this.isPolicyAccepted) {
        // Falls die Datenschutzrichtlinie nicht akzeptiert wurde
        console.log('Die Datenschutzrichtlinie muss akzeptiert werden.');
      }
    }
  }
}
  



