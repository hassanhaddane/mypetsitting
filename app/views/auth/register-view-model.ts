import { Observable, Frame } from '@nativescript/core';
import { AuthService } from '../../services/auth.service';

export class RegisterViewModel extends Observable {
  private authService: AuthService;
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  bio: string = '';
  isSitter: boolean = false;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  async onRegister() {
    try {
      await this.authService.register({
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        bio: this.bio,
        isSitter: this.isSitter
      });
      Frame.topmost().navigate({
        moduleName: 'views/home/home-page',
        clearHistory: true
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  onLoginTap() {
    Frame.topmost().goBack();
  }
}