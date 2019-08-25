import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Image } from "../models/image.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private getUrl: string = "/paintings";

  constructor(
    private http: HttpClient
  ) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.getUrl);
  }
}
