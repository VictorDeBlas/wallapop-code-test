import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { ItemModule } from '../item/item.module';
import { SearchPipe } from './item-list-search.pipe';
import { OrderPipe } from './item-list-order.pipe';

@NgModule({
  imports: [
    CommonModule,
    ItemModule
  ],
  declarations: [ItemListComponent, SearchPipe, OrderPipe],
  exports: [ItemListComponent]
})
export class ItemListModule { }
