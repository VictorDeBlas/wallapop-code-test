import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ItemData } from '../model/item.model';

export interface FavoriteList {
  favoriteList: Array<any>;
}

@Component({
  selector: 'w-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent extends DialogComponent<FavoriteList, boolean> implements FavoriteList, OnInit {

  public favoriteList: Array<ItemData>;
  public searchValue: string;
  public auxFavoriteList: Array<ItemData>;
  
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.auxFavoriteList = this.favoriteList;
  }

  public updateList(): void {
    this.favoriteList = this.auxFavoriteList.filter( item => {
      return item.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1;
    });
  }

}
