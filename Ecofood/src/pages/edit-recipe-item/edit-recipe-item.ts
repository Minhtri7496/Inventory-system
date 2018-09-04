import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { RecipeItem } from '../../model/recipe-item/item.model';
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
  deletestep(recipeItem: RecipeItem, stepno: number) {
    if (stepno == 1) {

      this.recipeItem.step1 = this.recipeItem.step2;
      this.recipeItem.step2 = this.recipeItem.step3;
      this.recipeItem.step3 = this.recipeItem.step4;
      this.recipeItem.step4 = this.recipeItem.step5;
      this.recipeItem.step5 = this.recipeItem.step6;
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";

      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
      
    }
    if (stepno == 2) {
      this.recipeItem.step2 = this.recipeItem.step3;
      this.recipeItem.step3 = this.recipeItem.step4;
      this.recipeItem.step4 = this.recipeItem.step5;
      this.recipeItem.step5 = this.recipeItem.step6;
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 3) {
      this.recipeItem.step3 = this.recipeItem.step4;
      this.recipeItem.step4 = this.recipeItem.step5;
      this.recipeItem.step5 = this.recipeItem.step6;
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 4) {
      this.recipeItem.step4 = this.recipeItem.step5;
      this.recipeItem.step5 = this.recipeItem.step6;
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 5) {
      this.recipeItem.step5 = this.recipeItem.step6;
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 6) {
      this.recipeItem.step6 = this.recipeItem.step7;
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 7) {
      this.recipeItem.step7 = this.recipeItem.step8;
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 8) {
      this.recipeItem.step8 = this.recipeItem.step9;
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 9) {
      this.recipeItem.step9 = this.recipeItem.step10;
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    } 
    if (stepno == 10) {
      this.recipeItem.step10 = this.recipeItem.step11;
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 11) {
      this.recipeItem.step11 = this.recipeItem.step12;
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 12) {
      this.recipeItem.step12 = this.recipeItem.step13;
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 13) {
      this.recipeItem.step13 = this.recipeItem.step14;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 14) {
      this.recipeItem.step14 = this.recipeItem.step15;
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }
    if (stepno == 15) {
      this.recipeItem.step15 = "";
      this.recipeItem.stepinput = this.recipeItem.stepinput -1;
    }

  }
  updateRecipeItem(recipeItem: RecipeItem) {
    recipeItem.totaltime = (parseInt(this.recipeItem.cookingtime) + parseInt(this.recipeItem.preptime)).toString();
    this.recipeItemRef$.update(recipeItem);
    this.navCtrl.pop();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipeItemPage');
  }

}
