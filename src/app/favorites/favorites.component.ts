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
  
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }

}
