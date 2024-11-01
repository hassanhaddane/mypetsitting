import { Observable, Frame, alert } from '@nativescript/core';

export class LoginViewModel extends Observable {
    email: string = '';
    password: string = '';

    constructor() {
        super();
    }

    onLogin() {
        // Simple validation
        if (!this.email || !this.password) {
            alert({
                title: "Error",
                message: "Please fill in all fields",
                okButtonText: "OK"
            });
            return;
        }

        Frame.topmost().navigate({
            moduleName: "views/home/home-page",
            clearHistory: true
        });
    }

    onRegisterTap() {
        Frame.topmost().navigate({
            moduleName: "views/auth/register-page"
        });
    }
}