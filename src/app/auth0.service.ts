// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../environments/environment';

// Avoid name not found warnings
let Auth0Lock: any = require('auth0-lock').default;
var logo = require("../logo.png");

var options = {
  theme: {
    logo: logo,
    primaryColor: '#673ab7'
  },
  languageDictionary: {
    title: "GardenMap Login"
  }
};

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(environment.auth0key, environment.auth0callback, options, {});


  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('gmap_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('gmap_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('gmap_token');
  }
}
