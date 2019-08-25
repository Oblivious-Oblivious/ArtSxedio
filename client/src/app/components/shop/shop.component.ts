import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild("navbar", { static: false }) navbar: NavbarComponent;

  images = ["image1", "image2", "image3", "image4"];

  constructor() { }

  ngOnInit() {
  }

  addToBasket(price: number) {
    this.navbar.addToBasket(price);
  }
}
