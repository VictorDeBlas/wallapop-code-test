import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemListModule } from './item-list/item-list.module';
import { ApiService } from './api/api.service';
import { FavoritesModule } from './favorites/favorites.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemListModule,
    HttpClientModule,
    HttpModule,
    FavoritesModule,
    ModalModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
