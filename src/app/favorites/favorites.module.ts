import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { ItemModule } from '../item/item.module';

@NgModule({
  imports: [
    CommonModule,
    ItemModule
  ],
  entryComponents: [FavoritesComponent],
  exports: [FavoritesComponent],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
