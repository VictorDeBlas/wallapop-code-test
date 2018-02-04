import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemModule } from '../item/item.module';

@NgModule({
  imports: [
    CommonModule,
    ItemModule
  ],
  declarations: [ItemListComponent],
  exports: [ItemListComponent]
})
export class ItemListModule { }
