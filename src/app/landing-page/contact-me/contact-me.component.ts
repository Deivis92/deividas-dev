import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, MatSnackBarModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  http = inject(HttpClient);
  snackBar = inject(MatSnackBar);

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
    if (!ngForm.valid || !this.isPolicyAccepted) {
      if (!this.isPolicyAccepted) this.showPrivacyError = true;
      return;
    }

    this.sendFormData(ngForm);
  }

  sendFormData(ngForm: NgForm): void {
    const formData = this.createFormData();
    this.http
      .post(this.post.endPoint, this.post.body(formData), this.post.options)
      .subscribe({
        next: () => this.handleSuccess(ngForm),
        error: (error) => this.handleError(error),
      });
  }

  createFormData() {
    return {
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message,
    };
  }

  handleSuccess(ngForm: NgForm): void {
    this.showSnackBar('Thank you for your message. I will get back to you shortly.', 'success');
    this.resetFormData();
    ngForm.resetForm();
  }

  handleError(error: any): void {
    console.error('Error during form submission:', error);
  }

  resetFormData(): void {
    this.contactData = {
      name: '',
      email: '',
      message: '',
    };
  }

  showSnackBar(message: string, type: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
