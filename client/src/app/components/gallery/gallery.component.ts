import { Component, OnInit } from '@angular/core';
import { Lightbox } from "ngx-lightbox";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  _albums = [];
  images = [];

  constructor(
    private _lightbox: Lightbox
  ) { }

  ngOnInit() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

    for (let i = 1; i <= 4; i++) {
      const imgsrc = "assets/img/";
      const src = imgsrc + "image" + i + ".jpg";
      const caption = "Ver Meer";
      const thumb = imgsrc + "image" + i + "-thumb.jpg";
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._albums.push(album);
    }

    let height = -1;
    let width = -1;
    [1081, 1014, 267, 266, 634, 923, 682, 173, 943].forEach((item, index) => {
      height = 200 * shuffleArray([5, 6, 7, 8])[0];
      width = 200 * shuffleArray([5, 6, 7, 8])[0];
      const img = {
        id: item,
        height: height,
        width: width
      };
      this.images.push(img);
    });
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
