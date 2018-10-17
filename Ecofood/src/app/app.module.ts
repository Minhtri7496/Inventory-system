import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShowPantryItemPage } from '../pages/show-pantry-item/show-pantry-item';
import { EditPantryItemPage } from '../pages/edit-pantry-item/edit-pantry-item';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import{AdditemPage} from'../pages/additem/additem';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EditRecipeItemPage} from'../pages/edit-recipe-item/edit-recipe-item';
import {ShowFullRecipePage} from '../pages/show-full-recipe/show-full-recipe';
import {AddPantryItemPage} from '../pages/add-pantry-item/add-pantry-item';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import{ShowIngredientOptionsPage} from '../pages/show-ingredient-options/show-ingredient-options';
 
const firebaseConfig = {
  apiKey: "AIzaSyA0qo9clm2ElNd-UgUHDcQHNMHfNw-8CYE",
  authDomain: "ecolife-fcb61.firebaseapp.com",
  databaseURL: "https://ecolife-fcb61.firebaseio.com",
  projectId: "ecolife-fcb61",
  storageBucket: "ecolife-fcb61.appspot.com",
  messagingSenderId: "151006309967"
  };
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,AdditemPage,EditRecipeItemPage,
    TabsPage,ShowFullRecipePage,AddPantryItemPage,EditPantryItemPage,ShowPantryItemPage,ShowIngredientOptionsPage
  ],
  imports: [
    BrowserModule,HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,AdditemPage,EditRecipeItemPage,
    TabsPage,ShowFullRecipePage,AddPantryItemPage,EditPantryItemPage,ShowPantryItemPage,ShowIngredientOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
