import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPantryItemPage } from './add-pantry-item';

@NgModule({
  declarations: [
    AddPantryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPantryItemPage),
  ],
})
export class AddPantryItemPageModule {}
