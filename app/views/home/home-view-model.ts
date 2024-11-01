import { Observable, Frame, alert } from '@nativescript/core';

export class HomeViewModel extends Observable {
    constructor() {
        super();
    }

    onLogout() {
        alert({
            title: "Logout",
            message: "Are you sure you want to logout?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result) {
                Frame.topmost().navigate({
                    moduleName: "views/auth/login-page",
                    clearHistory: true
                });
            }
        });
    }
}