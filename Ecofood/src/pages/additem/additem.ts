import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({ 
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {

  Recipes: FirebaseListObservable<any[]>;
  title = '';
  description = '';
 
  constructor( public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.Recipes = this.firebaseProvider.getRecipesItems();
  }
 
  addItem() {
    this.firebaseProvider.addItem(this.title,this.description);
   
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  


  

}
