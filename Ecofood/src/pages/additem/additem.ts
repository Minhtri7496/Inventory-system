import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {RecipeItem} from './../../model/recipe-item/item.model'
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
  recipeItem = {} as RecipeItem;
  recipeItemRef$ : FirebaseListObservable<RecipeItem[]>
   constructor( public navCtrl: NavController, private database :AngularFireDatabase) {
     this.recipeItemRef$ = this.database.list('recipe-list');

  }
 
  addItem(recipeItem : RecipeItem) {
    //log the result out 
    
    this.recipeItemRef$.push({
      
      title : this.recipeItem.title,
      description: this.recipeItem.description,
      recipeNumber: Number(this.recipeItem.recipeNumber=0)
    });
    this.navCtrl.pop();
  }
 

  


  

}
