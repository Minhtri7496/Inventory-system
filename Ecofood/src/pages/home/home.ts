import { Component } from '@angular/core';
import { NavController, ActionSheetController, ActionSheet } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { NavParams, ViewController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AdditemPage } from '../additem/additem';
import { RecipeItem } from './../../model/recipe-item/item.model'
import { EditRecipeItemPage } from '../edit-recipe-item/edit-recipe-item';
import { ShowFullRecipePage } from "../show-full-recipe/show-full-recipe";
import * as _ from 'lodash';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'


})

export class HomePage  {
  recipeItem = {} as RecipeItem;
  recipeItemRef$: FirebaseListObservable<RecipeItem[]>
  /// unwrapped arrays from firebase
  RecipeData: any;
  filteredRecipeData: any;
  searchTerm: string = '';
  searchcheck = false;
  constructor(public navCtrl: NavController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    this.recipeItemRef$ = this.database.list('recipe-list');
    this.recipeItemRef$.subscribe(recipe => {
      this.RecipeData = recipe;


    })






  }



  ionViewDidLoad() {


  }
  selectItem(recipeItem: RecipeItem) {
    this.actionSheetCtrl.create({
      title: `${recipeItem.title}`,
      buttons: [{
        text: 'Show Recipe',
        handler: () => {
          this.navCtrl.push(ShowFullRecipePage, { recipeItemId: recipeItem.$key });
        }
      }, {
        text: 'Edit',
        handler: () => {
          this.navCtrl.push(EditRecipeItemPage, { recipeItemId: recipeItem.$key });
        }
      }, {
        text: 'Delete',
        role: 'Destructive',
        handler: () => {
          this.recipeItemRef$.remove(recipeItem.$key);
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
    this.navCtrl.push(AdditemPage);
  }
  
 
  check() {
    this.RecipeData = this.filterItems(this.searchTerm);
    
  }
  resetSearch() {
    this.recipeItemRef$.subscribe(recipe => {
      this.RecipeData = recipe;
    })

  }

  displaySearch() {
    this.searchcheck = true;
    console.log(this.searchcheck);
  }
  hideSearch() {
    this.searchcheck = false;
    console.log(this.searchcheck);
  }

  filterItems(searchTerm) {
    return this.RecipeData.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

}



