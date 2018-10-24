import { Component } from '@angular/core';
import { NavController, Item, NavParams, ModalController, ModalOptions, Modal, Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { RecipeItem } from './../../model/recipe-item/item.model';
import { Pantryitem } from './../../model/pantry-item/pantry.model';
import { ShowIngredientOptionsPage } from './../../pages/show-ingredient-options/show-ingredient-options'

import { AlertController } from 'ionic-angular';
import { isBlank } from '../../../node_modules/ionic-angular/util/util';
import { empty } from '../../../node_modules/rxjs/Observer';
import { Subscription } from 'rx';
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
  public inputingredients;
  steps: Array<any> = [];
  emptyinput = false;
  public total: number = 0;
  imagevisible = false;

  recipeItem = {} as RecipeItem;
  recipeItemRef$: FirebaseListObservable<RecipeItem[]>


  //receive ingredients
  pantryItemSubscription: Subscription;

  pantry1Item = {} as Pantryitem;
  pantry2Item = {} as Pantryitem;
  pantry3Item = {} as Pantryitem;
  pantry4Item = {} as Pantryitem;
  pantry5Item = {} as Pantryitem;
  pantry6Item = {} as Pantryitem;
  pantry7Item = {} as Pantryitem;
  pantry8Item = {} as Pantryitem;
  pantry9Item = {} as Pantryitem;
  pantry10Item = {} as Pantryitem;


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private database: AngularFireDatabase, public navParams: NavParams, public alerCtrl: AlertController, public events: Events) {
    this.recipeItemRef$ = this.database.list('recipe-list');

    this.events.subscribe('ingrenumber', (data) => {
      this.inputingredients = data;


    });
  }
  ionViewDidLoad() {
    this.events.subscribe('item1', (data) => {
      this.pantry1Item = data;
    });
    this.events.subscribe('item2', (data) => {
      this.pantry2Item = data;
    });
    this.events.subscribe('item3', (data) => {
      this.pantry3Item = data;
    });
    this.events.subscribe('item4', (data) => {
      this.pantry4Item = data;
    });
    this.events.subscribe('item5', (data) => {
      this.pantry5Item = data;
    });
    this.events.subscribe('item6', (data) => {
      this.pantry6Item = data;
    });
    this.events.subscribe('item7', (data) => {
      this.pantry7Item = data;
    });
    this.events.subscribe('item8', (data) => {
      this.pantry8Item = data;
    });
    this.events.subscribe('item9', (data) => {
      this.pantry9Item = data;
    });
    this.events.subscribe('item10', (data) => {
      this.pantry10Item = data;
    });
  }

  addItem(recipeItem: RecipeItem) {
    //log the result out 
    var num1: number = 0;
    var num2: number = 0;
    num1 = parseInt(this.recipeItem.cookingtime);
    num2 = parseInt(this.recipeItem.preptime);
    if (isBlank(this.recipeItem.image)) {
      this.recipeItem.image = new URL("data:image/png;base64,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");
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



    //////////////////////////////////////////////////////////////////Ingredient 1//////////////////////////////////////////
    if (this.inputingredients == 1) {
      console.log("Ingre count is 1. ");
      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //check Ingredient2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.recipeItem.amountingredient2 = ' ';
      }
      if (isBlank(this.pantry2Item.title)) {
        this.pantry2Item.title = ' ';
      }
      if (isBlank(this.pantry2Item.$key)) {
        this.pantry2Item.$key = ' ';
      }

      //check Ingredient3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.recipeItem.amountingredient3 = ' ';
      }
      if (isBlank(this.pantry3Item.title)) {
        this.pantry3Item.title = ' ';
      }
      if (isBlank(this.pantry3Item.$key)) {
        this.pantry3Item.$key = ' ';
      }

      //check Ingredient4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.recipeItem.amountingredient4 = ' ';
      }
      if (isBlank(this.pantry4Item.title)) {
        this.pantry4Item.title = ' ';
      }
      if (isBlank(this.pantry4Item.$key)) {
        this.pantry4Item.$key = ' ';
      }

      //check Ingredient5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.recipeItem.amountingredient5 = ' ';
      }
      if (isBlank(this.pantry5Item.title)) {
        this.pantry5Item.title = ' ';
      }
      if (isBlank(this.pantry5Item.$key)) {
        this.pantry5Item.$key = ' ';
      }

      //check Ingredient6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.recipeItem.amountingredient6 = ' ';
      }
      if (isBlank(this.pantry6Item.title)) {
        this.pantry6Item.title = ' ';
      }
      if (isBlank(this.pantry6Item.$key)) {
        this.pantry6Item.$key = ' ';
      }

      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }


    }



    if (this.inputingredients == 2) {
      console.log("Ingre count is 2. ");
      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //check Ingredient3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.recipeItem.amountingredient3 = ' ';
      }
      if (isBlank(this.pantry3Item.title)) {
        this.pantry3Item.title = ' ';
      }
      if (isBlank(this.pantry3Item.$key)) {
        this.pantry3Item.$key = ' ';
      }

      //check Ingredient4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.recipeItem.amountingredient4 = ' ';
      }
      if (isBlank(this.pantry4Item.title)) {
        this.pantry4Item.title = ' ';
      }
      if (isBlank(this.pantry4Item.$key)) {
        this.pantry4Item.$key = ' ';
      }

      //check Ingredient5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.recipeItem.amountingredient5 = ' ';
      }
      if (isBlank(this.pantry5Item.title)) {
        this.pantry5Item.title = ' ';
      }
      if (isBlank(this.pantry5Item.$key)) {
        this.pantry5Item.$key = ' ';
      }

      //check Ingredient6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.recipeItem.amountingredient6 = ' ';
      }
      if (isBlank(this.pantry6Item.title)) {
        this.pantry6Item.title = ' ';
      }
      if (isBlank(this.pantry6Item.$key)) {
        this.pantry6Item.$key = ' ';
      }

      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }


    if (this.inputingredients == 3) {
      console.log("Ingre count is 3. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //check Ingredient4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.recipeItem.amountingredient4 = ' ';
      }
      if (isBlank(this.pantry4Item.title)) {
        this.pantry4Item.title = ' ';
      }
      if (isBlank(this.pantry4Item.$key)) {
        this.pantry4Item.$key = ' ';
      }

      //check Ingredient5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.recipeItem.amountingredient5 = ' ';
      }
      if (isBlank(this.pantry5Item.title)) {
        this.pantry5Item.title = ' ';
      }
      if (isBlank(this.pantry5Item.$key)) {
        this.pantry5Item.$key = ' ';
      }

      //check Ingredient6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.recipeItem.amountingredient6 = ' ';
      }
      if (isBlank(this.pantry6Item.title)) {
        this.pantry6Item.title = ' ';
      }
      if (isBlank(this.pantry6Item.$key)) {
        this.pantry6Item.$key = ' ';
      }

      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }



    if (this.inputingredients == 4) {
      console.log("Ingre count is 4. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //check Ingredient4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.recipeItem.amountingredient4 = ' ';
      }
      if (isBlank(this.pantry4Item.title)) {
        this.pantry4Item.title = ' ';
      }
      if (isBlank(this.pantry4Item.$key)) {
        this.pantry4Item.$key = ' ';
      }

      //check Ingredient5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.recipeItem.amountingredient5 = ' ';
      }
      if (isBlank(this.pantry5Item.title)) {
        this.pantry5Item.title = ' ';
      }
      if (isBlank(this.pantry5Item.$key)) {
        this.pantry5Item.$key = ' ';
      }

      //check Ingredient6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.recipeItem.amountingredient6 = ' ';
      }
      if (isBlank(this.pantry6Item.title)) {
        this.pantry6Item.title = ' ';
      }
      if (isBlank(this.pantry6Item.$key)) {
        this.pantry6Item.$key = ' ';
      }

      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }






    if (this.inputingredients == 5) {
      console.log("Ingre count is 5. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //check Ingredient6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.recipeItem.amountingredient6 = ' ';
      }
      if (isBlank(this.pantry6Item.title)) {
        this.pantry6Item.title = ' ';
      }
      if (isBlank(this.pantry6Item.$key)) {
        this.pantry6Item.$key = ' ';
      }

      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }


    if (this.inputingredients == 6) {
      console.log("Ingre count is 6. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 6 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //check Ingredient7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.recipeItem.amountingredient7 = ' ';
      }
      if (isBlank(this.pantry7Item.title)) {
        this.pantry7Item.title = ' ';
      }
      if (isBlank(this.pantry7Item.$key)) {
        this.pantry7Item.$key = ' ';
      }

      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }


    if (this.inputingredients == 7) {
      console.log("Ingre count is 7. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 6 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 7 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }



      //check Ingredient8
      if (isBlank(this.recipeItem.amountingredient8)) {
        this.recipeItem.amountingredient8 = ' ';
      }
      if (isBlank(this.pantry8Item.title)) {
        this.pantry8Item.title = ' ';
      }
      if (isBlank(this.pantry8Item.$key)) {
        this.pantry8Item.$key = ' ';
      }

      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }

    if (this.inputingredients == 8) {
      console.log("Ingre count is 8. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 6 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 7 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      if (isBlank(this.recipeItem.amountingredient8)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 8 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }



      //check Ingredient9
      if (isBlank(this.recipeItem.amountingredient9)) {
        this.recipeItem.amountingredient9 = ' ';
      }
      if (isBlank(this.pantry9Item.title)) {
        this.pantry9Item.title = ' ';
      }
      if (isBlank(this.pantry9Item.$key)) {
        this.pantry9Item.$key = ' ';
      }

      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }

    if (this.inputingredients == 9) {
      console.log("Ingre count is 9. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 6 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 7 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      if (isBlank(this.recipeItem.amountingredient8)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 8 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 9

      if (isBlank(this.recipeItem.amountingredient9)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 9 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }




      //check Ingredient10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.recipeItem.amountingredient10 = ' ';
      }
      if (isBlank(this.pantry10Item.title)) {
        this.pantry10Item.title = ' ';
      }
      if (isBlank(this.pantry10Item.$key)) {
        this.pantry10Item.$key = ' ';
      }
    }

    if (this.inputingredients == 10) {
      console.log("Ingre count is 10. ");

      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        console.log("amount is blank")
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }

      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre6
      if (isBlank(this.recipeItem.amountingredient6)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 6 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      //ingre7
      if (isBlank(this.recipeItem.amountingredient7)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 7 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


      if (isBlank(this.recipeItem.amountingredient8)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 8 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 9

      if (isBlank(this.recipeItem.amountingredient9)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 9 amount is empty',
          message: 'Please enter amount',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }
      //ingre 10
      if (isBlank(this.recipeItem.amountingredient10)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 10 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
      } else {
        console.log("amount is  NOT blank")
        this.emptyinput = false;
      }


    }
    /////////// push data///////////////////////
    this.total = num1 + num2;
    if (this.emptyinput == false) {
      this.recipeItemRef$.push({
        title: this.recipeItem.title,
        description: this.recipeItem.description,
        recipeNumber: Number(this.recipeItem.recipeNumber = 0),
        preptime: this.recipeItem.preptime,
        cookingtime: this.recipeItem.cookingtime,
        totaltime: Number(this.total.toString()),
        image: this.recipeItem.image,
        ingredientNumber:this.inputingredients,
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
        step15: this.recipeItem.step15,

        ingredient1: this.pantry1Item.title,
        keyingredient1: this.pantry1Item.$key,
        amountingredient1: this.recipeItem.amountingredient1,

        ingredient2: this.pantry2Item.title,
        keyingredient2: this.pantry2Item.$key,
        amountingredient2: this.recipeItem.amountingredient2,

        ingredient3: this.pantry3Item.title,
        keyingredient3: this.pantry3Item.$key,
        amountingredient3: this.recipeItem.amountingredient3,

        ingredient4: this.pantry4Item.title,
        keyingredient4: this.pantry4Item.$key,
        amountingredient4: this.recipeItem.amountingredient4,

        ingredient5: this.pantry5Item.title,
        keyingredient5: this.pantry5Item.$key,
        amountingredient5: this.recipeItem.amountingredient5,

        ingredient6: this.pantry6Item.title,
        keyingredient6: this.pantry6Item.$key,
        amountingredient6: this.recipeItem.amountingredient6,

        ingredient7: this.pantry7Item.title,
        keyingredient7: this.pantry7Item.$key,
        amountingredient7: this.recipeItem.amountingredient7,

        ingredient8: this.pantry8Item.title,
        keyingredient8: this.pantry8Item.$key,
        amountingredient8: this.recipeItem.amountingredient8,

        ingredient9: this.pantry9Item.title,
        keyingredient9: this.pantry9Item.$key,
        amountingredient9: this.recipeItem.amountingredient9,

        ingredient10: this.pantry10Item.title,
        keyingredient10: this.pantry10Item.$key,
        amountingredient10: this.recipeItem.amountingredient10,

      });
      this.navCtrl.pop();
    }

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


  addmoreingredient() {
    const myModelOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const modal: Modal = this.modalCtrl.create(ShowIngredientOptionsPage, myModelOptions);
    modal.present();
  }
}
