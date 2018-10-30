import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { RecipeItem } from '../../model/recipe-item/item.model';
import { Subscription } from 'rx';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
import { EditRecipeItemPage } from '../edit-recipe-item/edit-recipe-item';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
/**
 * Generated class for the ShowFullRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-full-recipe',
  templateUrl: 'show-full-recipe.html',
})
export class ShowFullRecipePage {
  recipeItemSubscription: Subscription;
  recipeItemRef$: FirebaseObjectObservable<RecipeItem>
  recipeItem = {} as RecipeItem;
  

  

  pantry1ItemRef$: FirebaseObjectObservable<Pantryitem>
  pantry1Item = {} as Pantryitem;
  pantry1ItemSubscription: Subscription;

  pantry2Item = {} as Pantryitem;
  pantry2ItemSubscription: Subscription;

  pantry3Item = {} as Pantryitem;
  pantry3ItemSubscription: Subscription;

  pantry4Item = {} as Pantryitem;
  pantry4ItemSubscription: Subscription;

  pantry5Item = {} as Pantryitem;
  pantry5ItemSubscription: Subscription;

  pantry6Item = {} as Pantryitem;
  pantry6ItemSubscription: Subscription;

  pantry7Item = {} as Pantryitem;
  pantry7ItemSubscription: Subscription;

  pantry8Item = {} as Pantryitem;
  pantry8ItemSubscription: Subscription;

  pantry9Item = {} as Pantryitem;
  pantry9ItemSubscription: Subscription;
  pantry10Item = {} as Pantryitem;


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    const recipeItemId = this.navParams.get('recipeItemId');

    this.recipeItemRef$ = this.database.object(`recipe-list/${recipeItemId}`);
    this.recipeItemRef$.subscribe(
      recipeItem => this.recipeItem = recipeItem);
  
     
     
      if(this.recipeItem.ingredientNumber >= 1){
      
      }
  }
  GoToEditItem() {
    this.navCtrl.push(EditRecipeItemPage, { recipeItemId: this.recipeItem.$key });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowFullRecipePage');
   
  }

}
