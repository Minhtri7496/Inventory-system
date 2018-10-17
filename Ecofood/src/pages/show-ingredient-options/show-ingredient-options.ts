import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { AdditemPage } from '../additem/additem';
/**
 * Generated class for the ShowIngredientOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-ingredient-options',
  templateUrl: 'show-ingredient-options.html',
})
export class ShowIngredientOptionsPage {
  pantryItem = {} as Pantryitem;
  pantryItemRef$: FirebaseListObservable<Pantryitem[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.pantryItemRef$ = this.database.list('pantry-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowIngredientOptionsPage');
  }
  selectPantryItem(pantryItem: Pantryitem) {
    this.navCtrl.pop();
    this.navCtrl.push(AdditemPage, { pantryItemId: pantryItem.$key });
   
  }
}
