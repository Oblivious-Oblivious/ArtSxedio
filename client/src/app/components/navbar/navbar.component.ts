import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from "../../services/theme.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navBurger", { static: false }) navBurger: ElementRef;
  @ViewChild("navMenu", { static: false }) navMenu: ElementRef;
  @ViewChild("darkThemeToggle", { static: false }) darkThemeToggle: ElementRef;
  @ViewChild("home", { static: false }) home: ElementRef;
  @ViewChild("gallery", { static: false }) gallery: ElementRef;
  @ViewChild("shop", { static: false }) shop: ElementRef;
  @ViewChild("about", { static: false }) about: ElementRef;

  constructor(
    private themeService: ThemeService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.classList.toggle("is-active");
  }

  toggleTheme() {
    this.darkThemeToggle.nativeElement.classList.toggle("is-outlined");
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    }
    else {
      this.themeService.setDarkTheme();
    }
  }

  underline(element) {
    switch (element) {
      case 0:
        this.home.nativeElement.style.textDecoration = "underline";
        this.gallery.nativeElement.style.textDecoration = "none";
        this.shop.nativeElement.style.textDecoration = "none";
        this.about.nativeElement.style.textDecoration = "none";
        break;
      case 1:
        this.home.nativeElement.style.textDecoration = "none";
        this.gallery.nativeElement.style.textDecoration = "underline";
        this.shop.nativeElement.style.textDecoration = "none";
        this.about.nativeElement.style.textDecoration = "none";
        break;
      case 2:
        this.home.nativeElement.style.textDecoration = "none";
        this.gallery.nativeElement.style.textDecoration = "none";
        this.shop.nativeElement.style.textDecoration = "underline";
        this.about.nativeElement.style.textDecoration = "none";
        break;
      case 3:
        this.home.nativeElement.style.textDecoration = "none";
        this.gallery.nativeElement.style.textDecoration = "none";
        this.shop.nativeElement.style.textDecoration = "none";
        this.about.nativeElement.style.textDecoration = "underline";
        break;
    }
  }
}
