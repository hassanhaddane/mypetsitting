import { Observable } from '@nativescript/core';
import { LoginCredentials, RegisterData } from '../models/auth.model';
import { User } from '../models/user.model';

export class AuthService extends Observable {
  private _currentUser: User | null = null;

  async login(credentials: LoginCredentials): Promise<User> {
    // TODO: Implement actual API call
    this._currentUser = {
      id: '1',
      name: 'John Doe',
      email: credentials.email,
      phone: '(555) 123-4567',
      bio: 'Dog lover and experienced pet sitter',
      isSitter: true,
      rating: 4.8,
      reviews: 12,
      imageUrl: 'https://picsum.photos/200'
    };
    return this._currentUser;
  }

  async register(data: RegisterData): Promise<User> {
    // TODO: Implement actual API call
    this._currentUser = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      bio: data.bio,
      isSitter: data.isSitter,
      rating: 0,
      reviews: 0,
      imageUrl: 'https://picsum.photos/200'
    };
    return this._currentUser;
  }

  logout(): void {
    this._currentUser = null;
  }

  get currentUser(): User | null {
    return this._currentUser;
  }
}