import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  
  constructor(public recipe: AngularFireDatabase) { }
 
  
  getRecipesItems() {
    return this.recipe.list('Recipes/');
  }
 
  addItem(title,description) {
    this.recipe.list('Recipes/'+title);
    this.recipe.list('Recipes/'+title+'/description').push(description);
  }
  
  removeItem(id) {
    this.recipe.list('Recipes/').remove(id);
  }

}
