import { Component, OnInit, Input } from '@angular/core';

import { Image } from "../../models/image.model";
import { ImageService } from "../../services/image.service";
import { ProductService } from "../../services/product.service";
import { PaginationService } from "../../services/pagination.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @Input() images: Image[] = [];
  _price: number;

  // Array of all items
  private allItems: any = [];

  // Pagination object
  pagination: any = {};

  // Paged items
  pagedItems: any[];

  constructor(
    private imageService: ImageService,
    private productService: ProductService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.imageService.getImages().subscribe((paintings) => {
      this.images = paintings;
    });

    this.allItems = this.images;
    console.log("Images");
    console.log(this.images);
    console.log("Items");
    console.log(this.allItems);
    this.setPage(1); /* Initialize page to 1 */
  }

  addToBasket(_id: string, title: string, price: number, src: string) {
    let element = <HTMLInputElement>document.getElementById(_id);
    element.disabled = true;

    element.style.background = "#fedc5686";
    this.productService.add(title, price, src);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }

    // Get pagination object from service
    this.pagination = this.paginationService.getPagination(this.allItems.length, page);

    // Get current page of items
    this.pagedItems = this.allItems.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
