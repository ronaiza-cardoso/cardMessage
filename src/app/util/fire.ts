import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class Fire {
  user: any = {};
  constructor() {
    const config = {
      apiKey: "AIzaSyBI-2GL5eEhqH1fl8IKAMJyg_Qdcv40qeM",
      authDomain: "cardmessage-64686.firebaseapp.com",
      databaseURL: "https://cardmessage-64686.firebaseio.com",
      storageBucket: "cardmessage-64686.appspot.com",
      messagingSenderId: "387607686421"
    };

    firebase.initializeApp(config);
  }

  public login(token: string, successCallback, errorCallback) {

      let credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase.auth().signInWithCredential(credential).then(response => {
        console.log(response.providerData[0]);
        this.setUser(token, response.providerData[0]);
        successCallback();
      }, error => {
        errorCallback(error );
      });
  }

  private setUser(token: string, authData: any) {
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = token;

    this.saveUser();
  }

  private saveUser() {
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    });
  }

}
