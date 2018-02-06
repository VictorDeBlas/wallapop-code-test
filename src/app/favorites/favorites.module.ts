import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { ItemModule } from '../item/item.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ItemModule,
    FormsModule
  ],
  entryComponents: [FavoritesComponent],
  exports: [FavoritesComponent],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
