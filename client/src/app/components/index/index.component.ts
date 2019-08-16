import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  _albums = [];

  constructor(
    private _lightbox: Lightbox
  ) { }

  ngOnInit() {
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
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
