import { Component } from '@angular/core';
import { NavController, ActionSheetController, ActionSheet } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {   NavParams, ViewController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AdditemPage } from '../additem/additem';
import {RecipeItem} from './../../model/recipe-item/item.model'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

  
})

export class HomePage {
  recipeItem = {} as RecipeItem;
  recipeItemRef$ : FirebaseListObservable<RecipeItem[]>

  constructor( public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl :ActionSheetController) {
  this.recipeItemRef$ = this.database.list('recipe-list');
  
  }
  selectItem(recipeItem : RecipeItem){
   this.actionSheetCtrl.create({
    title: `${recipeItem.title}`,
    buttons:[{
      text : 'Edit',
      handler:() => {
        //edit item
      }
    },{
text: 'Delete',
role : 'Destructive',
handler :() => {
  this.recipeItemRef$.remove(recipeItem.$key);
} },{
  text: 'Cancel',
  role : 'cancel',
  handler :() => {
    //user select cancel button
  }}]
   }).present();
  }
 
 

 
  GoToAddItem(){
    this.navCtrl.push(AdditemPage);
  }
  

}


  
