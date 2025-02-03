import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private localStorageKey = 'users';

  constructor() {
    // Optionally, initialize local storage with some pre-registered collector users.
    this.preRegisterCollectors();
  }

  // Register a new user (simulated by saving to local storage)
  registerUser(user: User): Observable<User> {
    const users: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    // Optionally, add validation to check for duplicate emails, etc.
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    return of(user).pipe(delay(500)); // simulate network delay
  }

  // Login a user (simulated by checking local storage)
  loginUser(email: string, password: string): Observable<User | null> {
    const users: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const user = users.find((u) => u.email === email && u.password === password);
    return of(user || null).pipe(delay(500)); // simulate network delay
  }

  // Pre-register collectors (only if not already registered)
  private preRegisterCollectors(): void {
    const users: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    if (!users.some((u) => u.role === 'collecteur')) {
      const collectors: User[] = [
        {
          id: 'collector-1',
          email: 'collector1@example.com',
          password: 'password123',
          firstName: 'Collector',
          lastName: 'One',
          address: '123 Collector St.',
          phone: '1234567890',
          birthDate: '1980-01-01',
          role: 'collecteur',
          profilePhoto: '',
        },
        // Add more collectors as needed.
      ];
      localStorage.setItem(this.localStorageKey, JSON.stringify([...users, ...collectors]));
    }
  }
}
