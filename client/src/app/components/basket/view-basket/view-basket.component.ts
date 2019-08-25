import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-basket',
  templateUrl: './view-basket.component.html',
  styleUrls: ['./view-basket.component.scss']
})
export class ViewBasketComponent implements OnInit {
  viewBasketEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  gotoUserInfo() {
    this.viewBasketEvent.emit(true);
  }
}
