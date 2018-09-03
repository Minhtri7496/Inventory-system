import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {RecipeItem} from './../../model/recipe-item/item.model';

import { AlertController } from 'ionic-angular';
import { isBlank } from '../../../node_modules/ionic-angular/umd/util/util';
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
  public inputsteps: number =0;
    steps: Array <any> = [];


  recipeItem = {} as RecipeItem;
  recipeItemRef$ : FirebaseListObservable<RecipeItem[]>
  
   constructor( public navCtrl: NavController, private database :AngularFireDatabase,public alerCtrl: AlertController) {
     this.recipeItemRef$ = this.database.list('recipe-list');
     
    
  }
 
  addItem(recipeItem : RecipeItem) {
    //log the result out 
    
    this.recipeItemRef$.push({
      
      title : this.recipeItem.title,
      description: this.recipeItem.description,
      recipeNumber: Number(this.recipeItem.recipeNumber=0),
      preptime: this.recipeItem.preptime,
      cookingtime: this.recipeItem.cookingtime,
      totaltime: Number(this.recipeItem.preptime+this.recipeItem.cookingtime),
      image : this.recipeItem.image,
      stepinput: Number(this.inputsteps),
      step1 : this.recipeItem.step1
    });
    this.navCtrl.pop();
    console.log(recipeItem.$key);
  
  }
  addmorestep(){
    if(this.inputsteps<=15){
    this.inputsteps = this.inputsteps+1;
    }else{
      this.inputsteps== 15;
      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The maximum step of a recipe is 15 steps',
        buttons: ['Ok']
      });
      alert.present()
    }
  }

  


  

}
