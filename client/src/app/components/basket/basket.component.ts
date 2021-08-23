import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: "app-basket",
    templateUrl: "./basket.component.html",
    styleUrls: ["./basket.component.scss"],
})
export class BasketComponent implements OnInit {
    constructor(private cookieService: CookieService) {}

    ngOnInit() {
        document.getElementById("step-1-marker")!.className = "steps-marker";
        switch (this.cookieService.get("step")) {
            case "1":
                this.viewBasketEvent();
                break;
            case "2":
                this.userInfoEvent();
                break;
            case "3":
                this.paymentEvent();
                break;
            case "4":
                this.confirmationEvent();
                break;
        }
    }

    viewBasketEvent() {
        this.cookieService.set("step", "1");
        document.getElementById("step-1")!.className = "steps-segment has-gaps";
        document.getElementById("step-2")!.className =
            "steps-segment has-gaps is-active";
        document.getElementById("step-3")!.className = "steps-segment has-gaps";
        document.getElementById("step-4")!.className = "steps-segment has-gaps";

        document.getElementById("step-1-marker")!.className = "steps-marker";
        document.getElementById("step-2-marker")!.className = "steps-marker";
        document.getElementById("step-3-marker")!.className =
            "steps-marker is-hollow";
        document.getElementById("step-4-marker")!.className =
            "steps-marker is-hollow";
    }

    userInfoEvent() {
        this.cookieService.set("step", "2");
        document.getElementById("step-1")!.className = "steps-segment has-gaps";
        document.getElementById("step-2")!.className = "steps-segment has-gaps";
        document.getElementById("step-3")!.className =
            "steps-segment has-gaps is-active";
        document.getElementById("step-4")!.className = "steps-segment has-gaps";

        document.getElementById("step-1-marker")!.className = "steps-marker";
        document.getElementById("step-2-marker")!.className = "steps-marker";
        document.getElementById("step-3-marker")!.className = "steps-marker";
        document.getElementById("step-4-marker")!.className =
            "steps-marker is-hollow";
    }

    paymentEvent() {
        this.cookieService.set("step", "3");
        document.getElementById("step-1")!.className = "steps-segment has-gaps";
        document.getElementById("step-2")!.className = "steps-segment has-gaps";
        document.getElementById("step-3")!.className = "steps-segment has-gaps";
        document.getElementById("step-4")!.className =
            "steps-segment has-gaps is-active";

        document.getElementById("step-1-marker")!.className = "steps-marker";
        document.getElementById("step-2-marker")!.className = "steps-marker";
        document.getElementById("step-3-marker")!.className = "steps-marker";
        document.getElementById("step-4-marker")!.className = "steps-marker";
    }

    confirmationEvent() {
        this.cookieService.set("step", "4");
        document.getElementById("step-1")!.className =
            "steps-segment has-gaps is-active";
        document.getElementById("step-2")!.className = "steps-segment has-gaps";
        document.getElementById("step-3")!.className = "steps-segment has-gaps";
        document.getElementById("step-4")!.className = "steps-segment has-gaps";

        document.getElementById("step-1-marker")!.className = "steps-marker";
        document.getElementById("step-2-marker")!.className =
            "steps-marker is-hollow";
        document.getElementById("step-3-marker")!.className =
            "steps-marker is-hollow";
        document.getElementById("step-4-marker")!.className =
            "steps-marker is-hollow";
    }
}
