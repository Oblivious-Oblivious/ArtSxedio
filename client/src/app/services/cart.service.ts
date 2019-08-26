import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() addToBasket: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  add(title: string, price: number, src: string) {
    this.addToBasket.emit({
      title,
      price,
      src
    });
  }
}
