import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ItemData } from '../model/item.model';
import { SearchPipe } from './item-list-search.pipe';

@Component({
  selector: 'w-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public itemList: Array<ItemData> = new Array<ItemData>();
  public hasMoreAvailable: boolean = true;
  public searchText: string;
  public searchBy: string;
  public orderBy: string;

  constructor(protected apiService: ApiService) { }

  ngOnInit() {
    this.getListFirstPage();
  }

  private getListFirstPage(): void {
    this.loadItems(0);
  }

  public getFavoriteItems(): Array<ItemData> {
    let favorites: Array<ItemData>;
    favorites = this.itemList.filter(item => item.favorite === true );
    return favorites;
  }

  public loadItems(page: number): void {
    this.apiService.getList(page)
      .subscribe(response => {
        this.itemList.push(...response);
        this.checkMoreAvailable(page);
      });
  }

  public setSearchText(searchText: string, searchBy: string): void {
    this.searchText = searchText;
    this.searchBy = searchBy;
  }

  public setOrderValue(orderValue: string): void {
    this.orderBy = orderValue;
  }

  private checkMoreAvailable(page: number): void {
    this.apiService.getList(page+1)
      .subscribe( response => this.hasMoreAvailable = response.length > 0);
  }

}
