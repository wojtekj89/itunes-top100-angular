import { Component, OnInit } from "@angular/core";
import { Album } from "../models/album.model";
import { AlbumsService } from "../services/albums.service";
import { SearchService } from "../services/search.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.scss"]
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];

  constructor(private as: AlbumsService, private fs: SearchService) {}

  ngOnInit() {
    this.fs.currentFilter.subscribe(filter => {
      this.filteredAlbums = this.albums.filter(x => {
        filter = filter.toLocaleLowerCase();
        const searchFields = [
          x.name.toLocaleLowerCase(),
          x.artist.toLocaleLowerCase()
        ];
        const results = searchFields.map(result => result.indexOf(filter));
        // adding +1 because finds return 0 on positive
        if (results.find(result => result >= 0) + 1) {
          return true;
        }
      });
    });
    this.as.getAlbums().subscribe(result => {
      result.feed.entry.forEach(element => {
        const album: Album = new Album(
          element["im:name"].label,
          // [2] for 170px image size, previous items are smaller
          element["im:image"][2].label,
          element["im:releaseDate"].attributes.label,
          element["im:artist"].label,
          element.link.attributes.href
        );
        this.albums.push(album);
      });
      this.filteredAlbums = this.albums;
    });
  }
}
