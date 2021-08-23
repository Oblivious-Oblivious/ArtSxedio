import { Component, OnInit, ViewChild } from "@angular/core";
import { BasketComponent } from "../basket.component";

@Component({
    selector: "app-confirmation",
    templateUrl: "./confirmation.component.html",
    styleUrls: ["./confirmation.component.scss"],
})
export class ConfirmationComponent implements OnInit {
    @ViewChild(BasketComponent, { static: false }) basket!: BasketComponent;

    constructor() {}

    ngOnInit(): void {}

    redirectShop() {
        /* Reset steps */
        this.basket.confirmationEvent();
    }
}
