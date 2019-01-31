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
      //console.log(filter);
      this.filteredAlbums = this.albums.filter(x => {
        const searchFields = [
          x.name.toLocaleLowerCase(),
          x.artist.toLocaleLowerCase()
        ];
        //console.log(searchFields);
        let results = searchFields.map(x => x.indexOf(filter));
        //console.log(results);
        //console.log(results.find(x => x >= 0));
        if (results.find(x => x >= 0) + 1) return true;
      });
      //console.log(this.filteredAlbums.length);
    });
    this.as.getAlbums().subscribe(result => {
      result.feed.entry.forEach(element => {
        let album: Album = new Album(
          element["im:name"].label,
          element["im:image"][2].label,
          element["im:releaseDate"].attributes.label,
          element["im:artist"].label
        );
        this.albums.push(album);
      });
      this.filteredAlbums = this.albums;
    });
  }
}
