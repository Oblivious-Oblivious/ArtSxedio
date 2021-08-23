import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { ThemeService } from "../../services/theme.service";
import { ProductService } from "../../services/product.service";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
    @ViewChild("navBurger", { static: false }) navBurger: ElementRef;
    @ViewChild("navMenu", { static: false }) navMenu: ElementRef;
    @ViewChild("home", { static: false }) home: ElementRef;
    @ViewChild("gallery", { static: false }) gallery: ElementRef;
    @ViewChild("shop", { static: false }) shop: ElementRef;
    @ViewChild("about", { static: false }) about: ElementRef;

    _price: string;
    items: string;

    constructor(
        private themeService: ThemeService,
        private cookieService: CookieService,
        private productService: ProductService
    ) {}

    ngOnInit() {
        if (!this._price) {
            localStorage.setItem("price", JSON.stringify({ price: "0.00" }));
        }
        if (!this.items) {
            localStorage.setItem("items", JSON.stringify({ items: 0 }));
        }

        if (this.cookieService.get("theme") == "light") {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
        this.underline(Number(this.cookieService.get("underlined")));
        this._price = JSON.parse(localStorage.getItem("price")).price;
        this.items = JSON.parse(localStorage.getItem("items")).items;

        this.productService.addToBasket.subscribe((product) => {
            /* Reset price into a number */
            if (JSON.parse(localStorage.getItem("price")).price == "0.00") {
                localStorage.setItem("price", JSON.stringify({ price: 0 }));
            }
            localStorage.setItem(
                "price",
                JSON.stringify({
                    price:
                        JSON.parse(localStorage.getItem("price")).price +
                        product.price,
                })
            );
            localStorage.setItem(
                "items",
                JSON.stringify({
                    items: JSON.parse(localStorage.getItem("items")).items + 1,
                })
            );

            this._price = JSON.parse(localStorage.getItem("price")).price;
            this.items = JSON.parse(localStorage.getItem("items")).items;
        });
    }

    toggleNavbar() {
        this.navBurger.nativeElement.classList.toggle("is-active");
        this.navMenu.nativeElement.classList.toggle("is-active");
    }

    toggleTheme() {
        if (this.cookieService.get("theme") == "dark") {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }

    setLightTheme() {
        /* Use vanilla javascript for calling DOM elements due to
       an angular issue on accessing DOM with ElementRef */
        // document.getElementById("theme-toggle").className = "button is-warning is-outlined";
        this.cookieService.set("theme", "light");
        this.themeService.setLightTheme();
    }

    setDarkTheme() {
        // document.getElementById("theme-toggle").className = "button is-warning";
        this.cookieService.set("theme", "dark");
        this.themeService.setDarkTheme();
    }

    underline(element: any) {
        switch (element) {
            case 0:
                this.cookieService.set("underlined", "0");
                document.getElementById("underlined-home").className =
                    "navbar-item is-home-selected";
                document.getElementById("underlined-gallery").className =
                    "navbar-item";
                document.getElementById("underlined-shop").className =
                    "navbar-item";
                document.getElementById("underlined-about").className =
                    "navbar-item";
                break;
            case 1:
                this.cookieService.set("underlined", "1");
                document.getElementById("underlined-home").className =
                    "navbar-item";
                document.getElementById("underlined-gallery").className =
                    "navbar-item is-gallery-selected";
                document.getElementById("underlined-shop").className =
                    "navbar-item";
                document.getElementById("underlined-about").className =
                    "navbar-item";
                break;
            case 2:
                this.cookieService.set("underlined", "2");
                document.getElementById("underlined-home").className =
                    "navbar-item";
                document.getElementById("underlined-gallery").className =
                    "navbar-item";
                document.getElementById("underlined-shop").className =
                    "navbar-item is-shop-selected";
                document.getElementById("underlined-about").className =
                    "navbar-item";
                break;
            case 3:
                this.cookieService.set("underlined", "3");
                document.getElementById("underlined-home").className =
                    "navbar-item";
                document.getElementById("underlined-gallery").className =
                    "navbar-item";
                document.getElementById("underlined-shop").className =
                    "navbar-item";
                document.getElementById("underlined-about").className =
                    "navbar-item is-about-selected";
                break;
        }
    }
}
