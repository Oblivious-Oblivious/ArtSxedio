import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  images = ["image1", "image2", "image3", "image4"];

  constructor() { }

  ngOnInit() {
  }
}
