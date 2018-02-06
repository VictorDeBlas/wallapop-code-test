import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { FavoritesComponent } from './favorites/favorites.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public page: number = 0;
  public searchBy: string = 'title';
  public searchValue: string;
  public orderBy: string;
  public searchOptions: Array<string> = ['title', 'description', 'price', 'email'];

  @ViewChild('itemList') public itemListComponent: ItemListComponent;

  constructor(protected dialogService: DialogService) {
  }

  ngOnInit() {
  }

  public showFavoritesList() {
    let favoriteList: Array<any> = this.itemListComponent.getFavoriteItems();
    this.dialogService.addDialog(FavoritesComponent, {
      favoriteList: favoriteList})
      .subscribe( () => console.log('test'));
  }

  public loadMoreItems(): void {
    this.page += 1;
    this.itemListComponent.loadItems(this.page);
  }

  public setOption(value: string): void {
    this.searchBy = value;
    this.updateSearchText();
  }

  public updateSearchText(): void {
    this.itemListComponent.setSearchText(this.searchValue, this.searchBy);
  }

  public setOrder(orderValue: string): void {
    this.orderBy = orderValue;
    this.itemListComponent.setOrderValue(this.orderBy);
  }
}
