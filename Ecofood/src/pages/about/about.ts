import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { AddPantryItemPage } from '../add-pantry-item/add-pantry-item';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pantryItem = {} as Pantryitem;
  pantryItemRef$: FirebaseListObservable<Pantryitem[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.pantryItemRef$ = this.database.list('pantry-list');
  }


  selectPantryItem(pantryItem: Pantryitem) {
    this.actionSheetCtrl.create({
      title: `Title`,
      buttons: [{
        text: 'Show Recipe',
        handler: () => {
          
        }
      }, {
        text: 'Edit',
        handler: () => {
          
        }
      }, {
        text: 'Delete',
        role: 'Destructive',
        handler: () => {
          
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          //user select cancel button
        }
      }]
    }).present();
  }
  GoToAddItem() {
    this.navCtrl.push(AddPantryItemPage);
  }
}
