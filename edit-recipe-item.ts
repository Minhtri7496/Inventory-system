import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import {RecipeItem} from '../../model/recipe-item/item.model';
import { Subscription } from 'rx';

/**
 * Generated class for the EditRecipeItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe-item',
  templateUrl: 'edit-recipe-item.html',
})
export class EditRecipeItemPage {
  recipeItemSubscription : Subscription;
  recipeItemRef$ : FirebaseObjectObservable<RecipeItem>
  recipeItem = {} as RecipeItem;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
   
    const recipeItemId = this.navParams.get('recipeItemId');
    console.log (recipeItemId);
    this.recipeItemRef$ = this.database.object(`recipe-list/${recipeItemId}`);

    this.recipeItemRef$.subscribe(
      recipeItem => this.recipeItem = recipeItem);
    
  }
  updateRecipeItem(recipeItem : RecipeItem){
  this.recipeItemRef$.update(recipeItem);
  this.navCtrl.pop();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipeItemPage');
  }

}
