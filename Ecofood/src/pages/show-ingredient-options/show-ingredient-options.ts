import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, ViewController, AlertController, Events } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { AdditemPage } from '../additem/additem';
import { Subscription } from 'rx';
import { AddPantryItemPage } from '../add-pantry-item/add-pantry-item';
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

  
  ingrenumber =0;

  pantry1Item = {} as Pantryitem;
  pantry1ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry1ItemSubscription: Subscription;

  pantry2Item = {} as Pantryitem;
  pantry2ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry2ItemSubscription: Subscription;

  pantry3Item = {} as Pantryitem;
  pantry3ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry3ItemSubscription: Subscription;

  pantry4Item = {} as Pantryitem;
  pantry4ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry4ItemSubscription: Subscription;

  pantry5Item = {} as Pantryitem;
  pantry5ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry5ItemSubscription: Subscription;

  pantry6Item = {} as Pantryitem;
  pantry6ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry6ItemSubscription: Subscription;

  pantry7Item = {} as Pantryitem;
  pantry7ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry7ItemSubscription: Subscription;

  pantry8Item = {} as Pantryitem;
  pantry8ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry8ItemSubscription: Subscription;

  pantry9Item = {} as Pantryitem;
  pantry9ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry9ItemSubscription: Subscription;

  pantry10Item = {} as Pantryitem;
  pantry10ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry10ItemSubscription: Subscription;
  constructor(public events: Events, public modalCtrl: ModalController, public navCtrl: NavController, private database: AngularFireDatabase, public alerCtrl: AlertController, private actionSheetCtrl: ActionSheetController, private view: ViewController) {
    this.pantryItemRef$ = this.database.list('pantry-list');
   
  }
  ionViewDidLoad() {
    
  }
  addNewIngredient(){

    this.navCtrl.push(AddPantryItemPage);

  }
  deselectPantryItem(pantrynumber: Number) {
    if (pantrynumber == 1) {
      this.pantry1Item = this.pantry2Item;
      this.pantry2Item = this.pantry3Item;
      this.pantry3Item = this.pantry4Item;
      this.pantry4Item = this.pantry5Item;
      this.pantry5Item = this.pantry6Item;
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 2) {
      this.pantry2Item = this.pantry3Item;
      this.pantry3Item = this.pantry4Item;
      this.pantry4Item = this.pantry5Item;
      this.pantry5Item = this.pantry6Item;
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 3) {
      this.pantry3Item = this.pantry4Item;
      this.pantry4Item = this.pantry5Item;
      this.pantry5Item = this.pantry6Item;
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 4) {
      this.pantry4Item = this.pantry5Item;
      this.pantry5Item = this.pantry6Item;
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 5) {
      this.pantry5Item = this.pantry6Item;
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 6) {
      this.pantry6Item = this.pantry7Item;
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 7) {
      this.pantry7Item = this.pantry8Item;
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 8) {
      this.pantry8Item = this.pantry9Item;
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 9) {
      this.pantry9Item = this.pantry10Item;

      this.ingrenumber = this.ingrenumber - 1;
    }
    if (pantrynumber == 10) {
      this.ingrenumber = this.ingrenumber - 1;
    }



  }
  selectPantryItem(pantryItem: Pantryitem) {
    this.ingrenumber = this.ingrenumber + 1;
    if (this.ingrenumber >= 11) {
      this.ingrenumber = 11;
      let alert = this.alerCtrl.create({
        title: 'Ingredients reaches limit',
        message: 'The maximum ingredient of a recipe is 10 ',
        buttons: ['Ok']
      });
      alert.present()


    }


    if (this.ingrenumber == 1) {

      this.pantry1ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry1ItemRef$.subscribe(
        pantryItem => this.pantry1Item = pantryItem);

    }

    if (this.ingrenumber == 2) {

      this.pantry2ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry2ItemRef$.subscribe(
        pantryItem => this.pantry2Item = pantryItem);

      if (this.pantry2Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',
          message: `${this.pantry2Item.title}` + '  is already added',
          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 1;
      }

    }

    if (this.ingrenumber == 3) {

      this.pantry3ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry3ItemRef$.subscribe(
        pantryItem => this.pantry3Item = pantryItem);

      if (this.pantry3Item.title == this.pantry2Item.title || this.pantry3Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',
          message: `${this.pantry3Item.title}` + '  is already added',
          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 2;
      }
    }

    if (this.ingrenumber == 4) {

      this.pantry4ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry4ItemRef$.subscribe(
        pantryItem => this.pantry4Item = pantryItem);

      if (this.pantry4Item.title == this.pantry3Item.title ||
        this.pantry4Item.title == this.pantry2Item.title ||
        this.pantry4Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry4Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 3;
      }

    }
    if (this.ingrenumber == 5) {

      this.pantry5ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry5ItemRef$.subscribe(
        pantryItem => this.pantry5Item = pantryItem);

      if (this.pantry5Item.title == this.pantry4Item.title ||
        this.pantry5Item.title == this.pantry3Item.title ||
        this.pantry5Item.title == this.pantry2Item.title ||
        this.pantry5Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry5Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 4;
      }

    }
    if (this.ingrenumber == 6) {

      this.pantry6ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry6ItemRef$.subscribe(
        pantryItem => this.pantry6Item = pantryItem);

      if (this.pantry6Item.title == this.pantry5Item.title ||
        this.pantry6Item.title == this.pantry4Item.title ||
        this.pantry6Item.title == this.pantry3Item.title ||
        this.pantry6Item.title == this.pantry2Item.title ||
        this.pantry6Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry6Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 5;
      }

    }
    if (this.ingrenumber == 7) {

      this.pantry7ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry7ItemRef$.subscribe(
        pantryItem => this.pantry7Item = pantryItem);

      if (this.pantry7Item.title == this.pantry6Item.title ||
        this.pantry7Item.title == this.pantry5Item.title ||
        this.pantry7Item.title == this.pantry4Item.title ||
        this.pantry7Item.title == this.pantry3Item.title ||
        this.pantry7Item.title == this.pantry2Item.title ||
        this.pantry7Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry7Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 6;
      }

    }
    if (this.ingrenumber == 8) {

      this.pantry8ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry8ItemRef$.subscribe(
        pantryItem => this.pantry8Item = pantryItem);

      if (this.pantry8Item.title == this.pantry7Item.title ||
        this.pantry8Item.title == this.pantry6Item.title ||
        this.pantry8Item.title == this.pantry5Item.title ||
        this.pantry8Item.title == this.pantry4Item.title ||
        this.pantry8Item.title == this.pantry3Item.title ||
        this.pantry8Item.title == this.pantry2Item.title ||
        this.pantry8Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry8Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 7;
      }

    }
    if (this.ingrenumber == 9) {

      this.pantry9ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry9ItemRef$.subscribe(
        pantryItem => this.pantry9Item = pantryItem);

      if (this.pantry9Item.title == this.pantry8Item.title ||
        this.pantry9Item.title == this.pantry7Item.title ||
        this.pantry9Item.title == this.pantry6Item.title ||
        this.pantry9Item.title == this.pantry5Item.title ||
        this.pantry9Item.title == this.pantry4Item.title ||
        this.pantry9Item.title == this.pantry3Item.title ||
        this.pantry9Item.title == this.pantry2Item.title ||
        this.pantry9Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry9Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 8;
      }

    }
    if (this.ingrenumber == 10) {

      this.pantry10ItemRef$ = this.database.object(`pantry-list/${pantryItem.$key}`);
      this.pantry10ItemRef$.subscribe(
        pantryItem => this.pantry10Item = pantryItem);

      if (this.pantry10Item.title == this.pantry9Item.title ||
        this.pantry10Item.title == this.pantry8Item.title ||
        this.pantry10Item.title == this.pantry7Item.title ||
        this.pantry10Item.title == this.pantry6Item.title ||
        this.pantry10Item.title == this.pantry5Item.title ||
        this.pantry10Item.title == this.pantry4Item.title ||
        this.pantry10Item.title == this.pantry3Item.title ||
        this.pantry10Item.title == this.pantry2Item.title ||
        this.pantry10Item.title == this.pantry1Item.title) {
        let alert = this.alerCtrl.create({
          title: 'Ingredients is already added',

          message: `${this.pantry10Item.title}` + '  is already added',

          buttons: ['Ok']
        });
        alert.present()
        this.ingrenumber = 9;
      }

    }
  

  }


  addIngredient() {
    this.events.publish('ingrenumber',this.ingrenumber);
    
    if(this.ingrenumber >=1){
    this.events.publish('item1',this.pantry1Item);
    
   }
   if(this.ingrenumber>=2){
    this.events.publish('item2',this.pantry2Item);
    
   }
   if(this.ingrenumber>=3){
    this.events.publish('item3',this.pantry3Item);
 
   }
   if(this.ingrenumber>=4){
    this.events.publish('item4',this.pantry4Item);
  
   }
   if(this.ingrenumber>=5){
    this.events.publish('item5',this.pantry5Item);
   
   }
   if(this.ingrenumber>=6){
    this.events.publish('item6',this.pantry6Item);
    
   }
   if(this.ingrenumber>=7){
    this.events.publish('item7',this.pantry7Item);

   }
   if(this.ingrenumber>=8){
    this.events.publish('item8',this.pantry8Item);
    
   }
   if(this.ingrenumber>=9){
    this.events.publish('item9',this.pantry9Item);

   }
   if(this.ingrenumber>=10){
    this.events.publish('item10',this.pantry10Item);
 
   }
   this.view.dismiss();
  }

}
