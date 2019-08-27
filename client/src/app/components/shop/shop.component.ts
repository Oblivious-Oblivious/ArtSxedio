import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

import { Image } from "../../models/image.model";
import { ImageService } from "../../services/image.service";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild(NavbarComponent, { static: false }) navbar: NavbarComponent;
  
  @Input() images: Image[] = [];
  _price: number;

  constructor(
    private imageService: ImageService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.imageService.getImages().subscribe((paintings) => {
      this.images = paintings;
    });
  }

  addToBasket(_id: string, title: string, price: number, src: string) {
    let element = <HTMLInputElement> document.getElementById(_id);
    element.disabled = true;
    
    element.style.background = "#fedc5686";
    this.productService.add(title, price, src);
  }
}
