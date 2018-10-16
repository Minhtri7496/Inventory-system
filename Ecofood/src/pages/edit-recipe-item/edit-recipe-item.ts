import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { RecipeItem } from '../../model/recipe-item/item.model';
import { Subscription } from 'rx';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public alerCtrl: AlertController) {

    const recipeItemId = this.navParams.get('recipeItemId');
    
    this.recipeItemRef$ = this.database.object(`recipe-list/${recipeItemId}`);

    this.recipeItemRef$.subscribe(
      recipeItem => this.recipeItem = recipeItem);

  }

  addstepbelow(recipeItem: RecipeItem, stepno: number) {
    if (this.recipeItem.stepinput < 15) {
      if (stepno == 1) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = this.recipeItem.step3;
        this.recipeItem.step3 = this.recipeItem.step2;
        this.recipeItem.step2 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 2) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = this.recipeItem.step3;
        this.recipeItem.step3 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 3) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 4) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 5) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 6) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 7) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 8) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 9) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 10) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 11) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 12) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 13) {

        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }

      if (stepno == 14) {

        this.recipeItem.step15 = " "

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
    } else {

      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The maximum step of a recipe is 15 steps',
        buttons: ['Ok']
      });
      alert.present()
    }

  }

  addstepabove(recipeItem: RecipeItem, stepno: number) {
    if (this.recipeItem.stepinput < 15) {
      if (stepno == 1) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = this.recipeItem.step3;
        this.recipeItem.step3 = this.recipeItem.step2;
        this.recipeItem.step2 = this.recipeItem.step1;
        this.recipeItem.step1 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 2) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = this.recipeItem.step3;
        this.recipeItem.step3 = this.recipeItem.step2;
        this.recipeItem.step2 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 3) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = this.recipeItem.step3;
        this.recipeItem.step3 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 4) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = this.recipeItem.step4;
        this.recipeItem.step4 = " ";


        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 5) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = this.recipeItem.step5;
        this.recipeItem.step5 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 6) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step6;
        this.recipeItem.step6 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 7) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step7;
        this.recipeItem.step7 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 8) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step8;
        this.recipeItem.step8 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 9) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step9;
        this.recipeItem.step9 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 10) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step10;
        this.recipeItem.step10 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 11) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step11;
        this.recipeItem.step11 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 12) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step12;
        this.recipeItem.step12 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 13) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step13;
        this.recipeItem.step13 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }
      if (stepno == 14) {
        this.recipeItem.step15 = this.recipeItem.step14;
        this.recipeItem.step14 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput + 1;
      }

    } else {

      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The maximum step of a recipe is 15 steps',
        buttons: ['Ok']
      });
      alert.present()
    }

  }



  deletestep(recipeItem: RecipeItem, stepno: number) {
    if (this.recipeItem.stepinput >= 1) {
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
        this.recipeItem.step15 = " ";

        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;

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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
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
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 8) {
        this.recipeItem.step8 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 9) {
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 10) {
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 11) {
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 12) {
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 13) {
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 14) {
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
      if (stepno == 15) {
        this.recipeItem.step15 = " ";
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    } else {
      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The minimum step is 1 step',
        buttons: ['Ok']
      });
      alert.present()
    }
  }
  updateRecipeItem(recipeItem: RecipeItem) {

    if (this.recipeItem.stepinput >= 1) {
      if (this.recipeItem.step1 == " ") {
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
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 2) {
      if (this.recipeItem.step2 == " ") {
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
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 3) {
      if (this.recipeItem.step3 == " ") {
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
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 4) {
      if (this.recipeItem.step4 == " ") {
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
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }

    if (this.recipeItem.stepinput >= 5) {
      if (this.recipeItem.step5 == " ") {
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
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 6) {
      if (this.recipeItem.step6 == " ") {
        this.recipeItem.step6 = this.recipeItem.step7;
        this.recipeItem.step7 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 7) {
      if (this.recipeItem.step7 == " ") {
        this.recipeItem.step7 = this.recipeItem.step8;
        this.recipeItem.step8 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 8) {
      if (this.recipeItem.step8 == " ") {
        this.recipeItem.step8 = this.recipeItem.step9;
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 9) {
      if (this.recipeItem.step9 == " ") {
        this.recipeItem.step9 = this.recipeItem.step10;
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 10) {
      if (this.recipeItem.step10 == " ") {
        this.recipeItem.step10 = this.recipeItem.step11;
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 11) {
      if (this.recipeItem.step9 == " ") {
        this.recipeItem.step11 = this.recipeItem.step12;
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 12) {
      if (this.recipeItem.step12 == " ") {
        this.recipeItem.step12 = this.recipeItem.step13;
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 13) {
      if (this.recipeItem.step13 == " ") {
        this.recipeItem.step13 = this.recipeItem.step14;
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 14) {
      if (this.recipeItem.step14 == " ") {
        this.recipeItem.step14 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }
    if (this.recipeItem.stepinput >= 15) {
      if (this.recipeItem.step15 == " ") {
        this.recipeItem.step15 = this.recipeItem.step15;
        this.recipeItem.stepinput = this.recipeItem.stepinput - 1;
      }
    }

    recipeItem.totaltime = (parseInt(this.recipeItem.cookingtime) + parseInt(this.recipeItem.preptime)).toString();
    this.recipeItemRef$.update(recipeItem);
    this.navCtrl.pop();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipeItemPage');
  }

}
