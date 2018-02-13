import { Component , Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  @Input() title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello HeaderComponent Component');
    
  }
  imgTab(){
  	this.navCtrl.push("HomePage");
  }
  homeMenu(){
  	this.navCtrl.push("HomePage");
  }
  // productMenu(){
  // 	this.navCtrl.push("ProductsPage");
  // }
  workMenu(){
    this.navCtrl.push("OurworkPage");
  }
  onCleaning(){
    this.navCtrl.push("CleaningPage");
  }
  onCoating(){
    this.navCtrl.push("CoatingPage");
  }
  contactMenu(){
    this.navCtrl.push("ContactPage");
  }
}
