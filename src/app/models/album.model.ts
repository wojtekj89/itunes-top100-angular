export class Album {
  name: string;
  cover: string;
  released: string;
  artist: string;
  url: string;

  constructor(
    name: string,
    cover: string,
    relased: string,
    artist: string,
    url: string
  ) {
    this.name = name;
    this.cover = cover;
    this.released = relased;
    this.artist = artist;
    this.url = url;
  }
}
