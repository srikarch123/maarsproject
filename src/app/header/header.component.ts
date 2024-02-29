import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as necessary
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  private authSubscription: Subscription;

  constructor(public authService: AuthService, private router: Router) {
    // Subscribe to the authentication state
    this.authSubscription = this.authService.isLoggedIn$.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
      }
    );
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.authSubscription.unsubscribe();
  }

  redirectToLogIn() {
    this.router.navigate(['/login']);
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
