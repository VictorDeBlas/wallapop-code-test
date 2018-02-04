import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from '../model/item.model';

@Component({
  selector: 'w-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public item: ItemData;
  @Input() public isFavoriteList: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public getImagePath(): string {
    return 'assets/images/' + this.item.image;
  }

}
