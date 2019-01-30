import { Component, OnInit } from "@angular/core";
import { Album } from "../models/album.model";
import { AlbumsService } from "../services/albums.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.scss"]
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];

  constructor(private as: AlbumsService) {}

  ngOnInit() {
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
    });
  }
}
