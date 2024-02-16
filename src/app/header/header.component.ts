import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  redirectToLogIn() {
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/home']);
  }
  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
  
}
