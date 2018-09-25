import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { RecipeItem } from './../../model/recipe-item/item.model';

import { AlertController } from 'ionic-angular';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
import { empty } from '../../../node_modules/rxjs/Observer';
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
  public inputsteps: number = 1;
  steps: Array<any> = [];
  public total: number = 0;
  imagevisible = false;

  recipeItem = {} as RecipeItem;
  recipeItemRef$: FirebaseListObservable<RecipeItem[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase, public alerCtrl: AlertController) {
    this.recipeItemRef$ = this.database.list('recipe-list');



  }

  addItem(recipeItem: RecipeItem) {
    //log the result out 
    var num1: number = 0;
    var num2: number = 0;
    num1 = parseInt(this.recipeItem.cookingtime);
    num2 = parseInt(this.recipeItem.preptime);
    if(isBlank(this.recipeItem.image.toString )  ){
      this.imagevisible=false;
    }else{
      
      this.imagevisible=true;
    }
    if (isBlank(this.recipeItem.step1)) {
      this.recipeItem.step1 = ' ';
    }
    if (isBlank(this.recipeItem.step2)) {
      this.recipeItem.step2 = ' ';
    }
    if (isBlank(this.recipeItem.step3)) {
      this.recipeItem.step3 = ' ';
    }
    if (isBlank(this.recipeItem.step4)) {
      this.recipeItem.step4 = ' ';
    }
    if (isBlank(this.recipeItem.step5)) {
      this.recipeItem.step5 = ' ';
    }
    if (isBlank(this.recipeItem.step6)) {
      this.recipeItem.step6 = ' ';
    }
    if (isBlank(this.recipeItem.step7)) {
      this.recipeItem.step7 = ' ';
    }
    if (isBlank(this.recipeItem.step8)) {
      this.recipeItem.step8 = ' ';
    }
    if (isBlank(this.recipeItem.step9)) {
      this.recipeItem.step9 = ' ';
    }
    if (isBlank(this.recipeItem.step10)) {
      this.recipeItem.step10 = ' ';
    }
    if (isBlank(this.recipeItem.step11)) {
      this.recipeItem.step11 = ' ';
    }
    if (isBlank(this.recipeItem.step12)) {
      this.recipeItem.step12 = ' ';
    }
    if (isBlank(this.recipeItem.step13)) {
      this.recipeItem.step13 = ' ';
    }
    if (isBlank(this.recipeItem.step14)) {
      this.recipeItem.step14 = ' ';
    }
    if (isBlank(this.recipeItem.step15)) {
      this.recipeItem.step15 = ' ';
    }

    this.total = num1 + num2;
    this.recipeItemRef$.push({
      title: this.recipeItem.title,
      description: this.recipeItem.description,
      recipeNumber: Number(this.recipeItem.recipeNumber = 0),
      preptime: this.recipeItem.preptime,
      cookingtime: this.recipeItem.cookingtime,
      totaltime: Number(this.total.toString()),
      image: this.recipeItem.image,
      stepinput: Number(this.inputsteps),
      step1: this.recipeItem.step1,
      step2: this.recipeItem.step2,
      step3: this.recipeItem.step3,
      step4: this.recipeItem.step4,
      step5: this.recipeItem.step5,
      step6: this.recipeItem.step6,
      step7: this.recipeItem.step7,
      step8: this.recipeItem.step8,
      step9: this.recipeItem.step9,
      step10: this.recipeItem.step10,
      step11: this.recipeItem.step11,
      step12: this.recipeItem.step12,
      step13: this.recipeItem.step13,
      step14: this.recipeItem.step14,
      step15: this.recipeItem.step15
    });
    this.navCtrl.pop();


  }


  addmorestep() {
    if (this.inputsteps < 15) {
      this.inputsteps = this.inputsteps + 1;
    } else {
      console.log(this.inputsteps);
      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The maximum step of a recipe is 15 steps',
        buttons: ['Ok']
      });
      alert.present()
    }
  }
  deletestep() {
    if (this.inputsteps > 1) {
      this.inputsteps = this.inputsteps - 1;
    } else {
      console.log(this.inputsteps);
      let alert = this.alerCtrl.create({
        title: 'Step reaches limit',
        message: 'The minimum step is 1 step',
        buttons: ['Ok']
      });
      alert.present()
    }
  }





}
