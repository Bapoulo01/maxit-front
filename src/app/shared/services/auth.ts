import { Injectable, signal } from '@angular/core';
import { UserModel } from '../../../model/UserModel';
import { USER_MOCK } from '../../shared/mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly KEY_LOCALSTORAGE = 'user-connect';
  private users = USER_MOCK;
  userSignal = signal<UserModel | undefined>(this.loadDataLocalStorage());

  constructor() {}

  login(email: string, password: string): void {
    const user = this.users.find(u => u.email === email && u.password === password);
    this.userSignal.set(user);
    if (user) {
      localStorage.setItem(this.KEY_LOCALSTORAGE, JSON.stringify(user));
    }
  }

  getUser(): UserModel | undefined {
    return this.userSignal();
  }

  isConnected(): boolean {
    return this.getUser() !== undefined;
  }

  isAdmin(): boolean {
    return this.getUser()?.role === 'Admin';
  }

  logOut(): void {
    this.userSignal.set(undefined);
    localStorage.removeItem(this.KEY_LOCALSTORAGE);
  }

  private loadDataLocalStorage(): UserModel | undefined {
    const data = localStorage.getItem(this.KEY_LOCALSTORAGE);
    return data ? JSON.parse(data) as UserModel : undefined;
  }
}
