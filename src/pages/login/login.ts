import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookLogin } from '../../app/util/facebook-login';
import { Fire } from '../../app/util/fire';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Fire]
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: Fire) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    FacebookLogin.login(response => {
      this.fire.login(response.accessToken, () => {
        console.log('sucesso');
      }, error => {
        console.log(error.errorMessage);
      });
    }, error => {
      console.log(error.message);
    });
  }

}
