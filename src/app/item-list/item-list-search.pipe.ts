import { Pipe, PipeTransform } from '@angular/core';
import { ItemData } from '../model/item.model';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(items: Array<ItemData>, searchParams: any): any {
    if(!searchParams[0]) return items;

    return items.filter(function(item){
      return item[searchParams[1]].toLowerCase().indexOf(searchParams[0].toLowerCase()) > -1;
    });
  }
}