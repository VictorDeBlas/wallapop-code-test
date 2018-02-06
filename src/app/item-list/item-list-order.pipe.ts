import { Pipe, PipeTransform } from '@angular/core';
import { ItemData } from '../model/item.model';

@Pipe({ name: 'order' })
export class OrderPipe implements PipeTransform {
  transform(items: Array<ItemData>, orderBy: any): any {
    if(!orderBy) return items;

    return items.sort( (item1: ItemData, item2: ItemData) => {
        let value1 = item1[orderBy],
            value2 = item2[orderBy];
        if ( orderBy === 'price') {
            value1 = parseInt( value1, 10);
            value2 = parseInt( value2, 10);
        }
        if ( value1 < value2 ) {
            return -1;
        } else if ( value1 > value2 ) {
            return 1;
        } 
        return 0;
    });
  }
}