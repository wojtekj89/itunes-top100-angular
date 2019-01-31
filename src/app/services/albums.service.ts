import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get<any>(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
  }
}
