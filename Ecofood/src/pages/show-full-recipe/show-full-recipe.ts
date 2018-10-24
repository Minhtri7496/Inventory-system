import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { RecipeItem } from '../../model/recipe-item/item.model';
import { Subscription } from 'rx';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    const recipeItemId = this.navParams.get('recipeItemId');
    console.log(recipeItemId);
    this.recipeItemRef$ = this.database.object(`recipe-list/${recipeItemId}`);

    this.recipeItemRef$.subscribe(
      recipeItem => this.recipeItem = recipeItem);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowFullRecipePage');
  }

}
