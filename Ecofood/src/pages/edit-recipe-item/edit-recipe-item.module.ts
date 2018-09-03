import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { EditRecipeItemPage } from './edit-recipe-item';

@NgModule({
  declarations: [
    EditRecipeItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRecipeItemPage),
  ],
})
export class EditRecipeItemPageModule {}
