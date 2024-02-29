import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(this.checkInitialLoginState());

  isLoggedIn$ = this._isLoggedIn.asObservable();

  private checkInitialLoginState(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  signIn() {
    localStorage.setItem('isLoggedIn', 'true');
    this._isLoggedIn.next(true);
  }

  signOut() {
    localStorage.removeItem('isLoggedIn');
    this._isLoggedIn.next(false);
  }
}
