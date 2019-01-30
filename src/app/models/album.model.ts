export class Album {
  name: string;
  cover: string;
  released: string;
  artist: string;

  constructor(name: string, cover: string, relased: string, artist: string) {
    this.name = name;
    this.cover = cover;
    this.released = relased;
    this.artist = artist;
  }
}
