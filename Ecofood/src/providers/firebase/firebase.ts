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

  
  constructor(public afd: AngularFireDatabase) { }
 
  getRecipesItems() {
    return this.afd.list('Recipes/');
  }
 
  addItem(title,description) {
    this.afd.list('Recipes/').push(title);
    this.afd.list('Recipes/').push(description);
  }
 
  removeItem(id) {
    this.afd.list('Recipes/').remove(id);
  }

}
