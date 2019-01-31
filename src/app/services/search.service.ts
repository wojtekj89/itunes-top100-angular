import { Injectable, Output, EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private filter = new BehaviorSubject<string>("");
  currentFilter = this.filter.asObservable();

  updateFilter(current: string) {
    this.filter.next(current);
  }
}
