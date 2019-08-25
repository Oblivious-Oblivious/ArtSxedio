import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() private viewBasketEvent: EventEmitter<boolean>;
  @Input() private userInfoEvent: EventEmitter<boolean>;
  @Input() private paymentEvent: EventEmitter<boolean>;
  @Input() private confirmationEvent: EventEmitter<boolean>;

  constructor() { }

  ngOnInit() {
    this.listenForEvents();
  }

  listenForEvents() {
    if (this.viewBasketEvent) {
      console.log("EVENT 1");
      this.viewBasketEvent.subscribe((data) => {
        document.getElementById("step-1").className = "steps-segment has-gaps";
        document.getElementById("step-2").className = "steps-segment has-gaps is-active";
        document.getElementById("step-3").className = "steps-segment has-gaps";
        document.getElementById("step-4").className = "steps-segment has-gaps";

        document.getElementById("step-1-marker").className = "steps-marker";
      });
    }
    if (this.userInfoEvent) {
      console.log("EVENT 2");
      this.userInfoEvent.subscribe((data) => {
        document.getElementById("step-1").className = "steps-segment has-gaps";
        document.getElementById("step-2").className = "steps-segment has-gaps";
        document.getElementById("step-3").className = "steps-segment has-gaps is-active";
        document.getElementById("step-4").className = "steps-segment has-gaps";

        document.getElementById("step-2-marker").className = "steps-marker";
      });
    }
    if (this.paymentEvent) {
      console.log("EVENT 3");
      this.paymentEvent.subscribe((data) => {
        document.getElementById("step-1").className = "steps-segment has-gaps";
        document.getElementById("step-2").className = "steps-segment has-gaps";
        document.getElementById("step-3").className = "steps-segment has-gaps";
        document.getElementById("step-4").className = "steps-segment has-gaps is-active";

        document.getElementById("step-3-marker").className = "steps-marker";
      });
    }
    if (this.confirmationEvent) {
      console.log("EVENT 4");
      this.confirmationEvent.subscribe((data) => {
        document.getElementById("step-1").className = "steps-segment has-gaps is-active";
        document.getElementById("step-2").className = "steps-segment has-gaps";
        document.getElementById("step-3").className = "steps-segment has-gaps";
        document.getElementById("step-4").className = "steps-segment has-gaps";

        document.getElementById("step-1-marker").className = "steps-marker is-hollow";
        document.getElementById("step-2-marker").className = "steps-marker is-hollow";
        document.getElementById("step-3-marker").className = "steps-marker is-hollow";
        document.getElementById("step-4-marker").className = "steps-marker is-hollow";
      });
    }
  }
}
