import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { Subscription } from 'rx';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
/**
 * Generated class for the EditPantryItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-pantry-item',
  templateUrl: 'edit-pantry-item.html',
})
export class EditPantryItemPage {
  pantryItemSubscription: Subscription;
  pantryItemRef$: FirebaseObjectObservable<Pantryitem>
  pantryItem = {} as Pantryitem;
  inputempty = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public alerCtrl: AlertController) {
    const pantryItemId = this.navParams.get('pantryItemId');
    console.log(pantryItemId);
    this.pantryItemRef$ = this.database.object(`pantry-list/${pantryItemId}`);

    this.pantryItemRef$.subscribe(
      pantryItem => this.pantryItem = pantryItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPantryItemPage');
  }
  updateRecipeItem(pantryItem: Pantryitem) {

    if (isBlank(this.pantryItem.title)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Title is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.quantity)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Quantity is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.description)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'description is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.unit)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Unit is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.date)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Date is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.category)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Category is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }
    if (isBlank(this.pantryItem.imageurl)) {
      let alert = this.alerCtrl.create({
        title: 'Empty input detected',
        message: 'Image Url is emply',
        buttons: ['Ok']
      });
      alert.present()
      this.inputempty = true;
    } else {
      this.inputempty = false;
    }


    if (this.inputempty == false) {
    this.pantryItemRef$.update(pantryItem);
    this.navCtrl.pop();

    }


  }
}
