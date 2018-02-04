import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ItemData } from '../model/item.model';

@Component({
  selector: 'w-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public itemList: Array<ItemData> = new Array<ItemData>();

  constructor(protected apiService: ApiService) { }

  ngOnInit() {
    this.getListFirstPage();
  }

  private getListFirstPage(): void {
    this.apiService.getList(0)
      .subscribe( response => {
        this.itemList.push(...response)
      });
  }

  public getFavoriteItems(): Array<ItemData> {
    let favorites: Array<ItemData>;
    favorites = this.itemList.filter(item => item.favorite === true );
    return favorites;
  }

}
