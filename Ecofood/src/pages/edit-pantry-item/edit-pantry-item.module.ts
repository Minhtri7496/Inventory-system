import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPantryItemPage } from './edit-pantry-item';

@NgModule({
  declarations: [
    EditPantryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPantryItemPage),
  ],
})
export class EditPantryItemPageModule {}
