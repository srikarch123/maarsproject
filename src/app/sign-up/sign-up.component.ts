import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  user = {
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  };

  submissionSuccess = false;
  errorMessage: string = ''; 

  constructor(private http: HttpClient) {}
  onSubmit(form: any) {
    this.submissionSuccess = false; // Reset success status
    this.errorMessage = ''; // Reset error message
    
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      
      this.http.post('http://localhost:3000/signup', this.user)
      .subscribe({
        next: (response) => {
          console.log('User signed up successfully', response);
          this.submissionSuccess = true; // Update on successful submission
          this.errorMessage = ''; // Clear any previous error messages
        },
        error: (error) => {
          console.error('Error signing up user', error);
          if (error.status === 409) {
            // Handle duplicate email error specifically
            this.errorMessage = 'The email is already registered. Please use a different email.';
          } else if (error.error && error.error.message) {
            // Handle other errors with a backend-provided message
            this.errorMessage = error.error.message;
          } else if (error.status === 0) {
            // Handle network errors or cases where the backend is down
            this.errorMessage = 'Unable to connect to the server. Please try again later.';
          } else {
            // Fallback for other types of errors or unexpected error formats
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        }
      });
    
    }
  }
}
