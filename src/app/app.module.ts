import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumItemComponent } from "./album-item/album-item.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumListComponent,
    AlbumItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
