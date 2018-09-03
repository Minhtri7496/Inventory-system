import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowFullRecipePage } from './show-full-recipe';

@NgModule({
  declarations: [
    ShowFullRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowFullRecipePage),
  ],
})
export class ShowFullRecipePageModule {}
