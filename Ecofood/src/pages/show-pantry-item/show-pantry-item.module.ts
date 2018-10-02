import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPantryItemPage } from './show-pantry-item';

@NgModule({
  declarations: [
    ShowPantryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPantryItemPage),
  ],
})
export class ShowPantryItemPageModule {}
