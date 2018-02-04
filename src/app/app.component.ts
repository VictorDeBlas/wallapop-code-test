import { Component, ViewChild } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { FavoritesComponent } from './favorites/favorites.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('itemList') public itemListComponent: ItemListComponent;

  constructor(protected dialogService: DialogService) {

  }

  public showFavoritesList() {
    let favoriteList: Array<any> = this.itemListComponent.getFavoriteItems();
    this.dialogService.addDialog(FavoritesComponent, {
      favoriteList: favoriteList})
      .subscribe( () => console.log('test'));
  }
}
