import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { AddPantryItemPage } from '../add-pantry-item/add-pantry-item';
import { EditPantryItemPage } from '../edit-pantry-item/edit-pantry-item';
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
      title: `${pantryItem.title}`,
      buttons: [{
        text: 'Show Item',
        handler: () => {
          
        }
      }, {
        text: 'Edit',
        handler: () => {
          this.navCtrl.push(EditPantryItemPage, { pantryItemId: pantryItem.$key });
        }
      }, {
        text: 'Delete',
        role: 'Destructive',
        handler: () => {
          this.pantryItemRef$.remove(pantryItem.$key);
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
