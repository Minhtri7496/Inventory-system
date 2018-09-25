import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
/**
 * Generated class for the AddPantryItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pantry-item',
  templateUrl: 'add-pantry-item.html',
})
export class AddPantryItemPage {
  
  pantryItem = {} as Pantryitem;
  pantryItemRef$: FirebaseListObservable<Pantryitem[]>
  inputempty = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase,public alerCtrl: AlertController) {
    this.pantryItemRef$ = this.database.list('pantry-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPantryItemPage');
  }
addItem(){

  if(isBlank(this.pantryItem.title)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Title is emply',
      buttons: ['Ok']
    });
    alert.present()  
    this.inputempty =true;
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.quantity)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Quantity is emply',
      buttons: ['Ok']
    });
    alert.present()  
    this.inputempty =true;
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.description)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'description is emply',
      buttons: ['Ok']
    });
    alert.present()  
    this.inputempty =true;
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.unit)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Unit is emply',
      buttons: ['Ok']
    });
    alert.present()
    this.inputempty =true;  
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.date)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Date is emply',
      buttons: ['Ok']
    });
    alert.present()  
    this.inputempty =true;
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.category)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Category is emply',
      buttons: ['Ok']
    });
    alert.present() 
    this.inputempty =true; 
  }else{
    this.inputempty =false;
  }
  if(isBlank(this.pantryItem.imageurl)){
    let alert = this.alerCtrl.create({
      title: 'Empty input detected',
      message: 'Image Url is emply',
      buttons: ['Ok']
    });
    alert.present() 
    this.inputempty =true; 
  }else{
    this.inputempty =false;
  }
  if(this.inputempty == false){
  this.pantryItemRef$.push({
    title: this.pantryItem.title,
    quantity: this.pantryItem.quantity,
    description: this.pantryItem.description,
    unit: this.pantryItem.unit,
    date: this.pantryItem.date,
    category: this.pantryItem.category,
    imageurl : this.pantryItem.imageurl
  });
  this.navCtrl.pop();}
}
}
