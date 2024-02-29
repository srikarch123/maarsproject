import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service'; // Update the path as per your project structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  signIn() {
    this.http.post('http://localhost:3000/signin', { email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          // Update the authentication state
          this.authService.signIn();
          // Redirect to home page
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // Handle sign-in error
          this.errorMessage = 'Username or password is incorrect';
          console.error(error);
        }
      });
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
}
