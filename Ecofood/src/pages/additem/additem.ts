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
      console.log("THis is number " + this.inputingredients);

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
    if (isBlank(this.recipeItem.image.toString)) {
      this.imagevisible = false;
    } else {

      this.imagevisible = true;
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

    if (this.inputingredients <= 1) {
      //ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
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
      
      
    
    if (this.inputingredients <= 2) {
      
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
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
    if (this.inputingredients <= 3) {
      
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
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




    if (this.inputingredients >= 4) {
      
      //ingre4
      if (isBlank(this.recipeItem.amountingredient4)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 4 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
      }
//ingre 1
      if (isBlank(this.recipeItem.amountingredient1)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 1 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
      }
      //ingre 2
      if (isBlank(this.recipeItem.amountingredient2)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 2 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
      }
      //ingre 3
      if (isBlank(this.recipeItem.amountingredient3)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 3 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
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




    

if (this.inputingredients >= 5) {
   
      //ingre5
      if (isBlank(this.recipeItem.amountingredient5)) {
        this.emptyinput = true;
        let alert = this.alerCtrl.create({
          title: 'Ingredient 5 amount is empty',
          message: 'Please choose an ingredient',
          buttons: ['Ok']
        });
        alert.present()
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


    if (this.inputingredients >= 6) {
      
   
        //ingre6
        if (isBlank(this.recipeItem.amountingredient6)) {
          this.emptyinput = true;
          let alert = this.alerCtrl.create({
            title: 'Ingredient 6 amount is empty',
            message: 'Please choose an ingredient',
            buttons: ['Ok']
          });
          alert.present()
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


       if (this.inputingredients >= 7) {
        

          //ingre7
          if (isBlank(this.recipeItem.amountingredient7)) {
            this.emptyinput = true;
            let alert = this.alerCtrl.create({
              title: 'Ingredient 7 amount is empty',
              message: 'Please choose an ingredient',
              buttons: ['Ok']
            });
            alert.present()
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

         if (this.inputingredients >= 8) {
          
            
            if (isBlank(this.recipeItem.amountingredient8)) {
              this.emptyinput = true;
              let alert = this.alerCtrl.create({
                title: 'Ingredient 8 amount is empty',
                message: 'Please choose an ingredient',
                buttons: ['Ok']
              });
              alert.present()
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

           if (this.inputingredients >= 9) {
            //ingre 1
            
              if (isBlank(this.recipeItem.amountingredient9)) {
                this.emptyinput = true;
                let alert = this.alerCtrl.create({
                  title: 'Ingredient 9 amount is empty',
                  message: 'Please choose an ingredient',
                  buttons: ['Ok']
                });
                alert.present()
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

             if (this.inputingredients >= 10) {
              
                 
                if (isBlank(this.recipeItem.amountingredient10)) {
                  this.emptyinput = true;
                  let alert = this.alerCtrl.create({
                    title: 'Ingredient 10 amount is empty',
                    message: 'Please choose an ingredient',
                    buttons: ['Ok']
                  });
                  alert.present()
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
