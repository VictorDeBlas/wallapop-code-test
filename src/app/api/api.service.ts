import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ItemData } from '../model/item.model';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getList(page: number): Observable<Array<ItemData>> {
    return this.http.get('../../assets/items.json')
            .map((res:any) => {
              let parsedResponse = res.json();
              let itemListToConvert = parsedResponse.items.splice(page*5, 5);
              return this.convertDataToItems(itemListToConvert);
            });
  }

  private convertDataToItems(itemList: Array<any>): Array<ItemData> {
    let items: Array<ItemData> = new Array<ItemData>();
    itemList.forEach ( itemResponse => items.push(new ItemData(itemResponse)));
    return items;
  }

}
