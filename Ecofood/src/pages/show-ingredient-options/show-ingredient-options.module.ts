import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowIngredientOptionsPage } from './show-ingredient-options';

@NgModule({
  declarations: [
    ShowIngredientOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowIngredientOptionsPage),
  ],
})
export class ShowIngredientOptionsPageModule {}
