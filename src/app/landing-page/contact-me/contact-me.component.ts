import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, MatSnackBarModule], // Add MatSnackBarModule
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  http = inject(HttpClient);
  snackBar = inject(MatSnackBar); // Inject MatSnackBar

  contactData = {
    name: '',
    email: '',
    message: '',
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
        message: this.contactData.message,
      };
  
      console.log('Sending form data:', formData);
  
      this.http
        .post(this.post.endPoint, this.post.body(formData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log('Form successfully submitted:', response);
            this.showSnackBar('Thank you for your message. I will get back to you shortly.', 'success');
            
            // Alle Felder nach erfolgreichem Absenden leeren
            this.contactData = {
              name: '',
              email: '',
              message: '',
            };
            
            // Formular zurücksetzen
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error during form submission:', error);
          },
          complete: () => {
            console.log('Request completed.');
          },
        });
    } else if (!this.isPolicyAccepted) {
      console.log('Privacy policy must be accepted.');
    }
  }
  

  showSnackBar(message: string, type: string): void {
    this.snackBar.open(message, '', {  // Leere Zeichenfolge für den Close-Button
      duration: 3000,  // Dauer in Millisekunden
      horizontalPosition: 'center',  // Position horizontal in der Mitte
      verticalPosition: 'top',       // Position vertikal oben
      panelClass: type,              // 'success' oder 'error' für spezifische Styles
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

