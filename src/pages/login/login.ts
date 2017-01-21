import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookLogin } from '../../app/util/facebook-login';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    FacebookLogin.login(response => {
      alert(response);
    }, error => {
      alert(error.message);
    });
  }

}
