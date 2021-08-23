import { Component, OnInit, ViewChild } from "@angular/core";
import { BasketComponent } from "../basket.component";

@Component({
    selector: "app-payment",
    templateUrl: "./payment.component.html",
    styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
    @ViewChild(BasketComponent, { static: false }) basket!: BasketComponent;

    constructor() {}

    ngOnInit() {}

    gotoConfirmation() {
        this.basket.paymentEvent();
    }
}
