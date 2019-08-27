import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() addToBasket: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  add(title: string, price: number, src: string) {
    const product: Product = {
      title,
      price,
      src
    };
    this.addToBasket.emit(product);
  }
}
