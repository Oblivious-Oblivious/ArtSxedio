import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

import { Image } from "../../models/image.model";
import { ImageService } from "../../services/image.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild("navbar", { static: false }) navbar: NavbarComponent;
  
  @Input() images: Image[] = [];

  constructor(
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.imageService.getImages().subscribe((paintings) => {
      this.images = paintings;
    });
  }

  addToBasket(price: number) {
    this.navbar.addToBasket(price);
  }
}
