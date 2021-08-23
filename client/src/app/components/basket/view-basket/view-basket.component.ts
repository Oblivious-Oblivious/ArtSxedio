import { Component, OnInit, ViewChild } from "@angular/core";
import { BasketComponent } from "../basket.component";

@Component({
    selector: "app-view-basket",
    templateUrl: "./view-basket.component.html",
    styleUrls: ["./view-basket.component.scss"],
})
export class ViewBasketComponent implements OnInit {
    @ViewChild(BasketComponent, { static: false }) basket!: BasketComponent;

    constructor() {}

    ngOnInit() {}

    gotoUserInfo() {
        this.basket.viewBasketEvent();
    }
}
