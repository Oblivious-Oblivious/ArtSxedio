import { Component, OnInit, ViewChild } from "@angular/core";
import { BasketComponent } from "../basket.component";

@Component({
    selector: "app-user-information",
    templateUrl: "./user-information.component.html",
    styleUrls: ["./user-information.component.scss"],
})
export class UserInformationComponent implements OnInit {
    @ViewChild(BasketComponent, { static: false }) basket: BasketComponent;

    constructor() {}

    ngOnInit() {}

    gotoPayment() {
        this.basket.userInfoEvent();
    }
}
