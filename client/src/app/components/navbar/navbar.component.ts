import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navBurger", { static: false }) navBurger: ElementRef;
  @ViewChild("navMenu", { static: false }) navMenu: ElementRef;
  @ViewChild("darkThemeToggle", { static: false }) darkThemeToggle: ElementRef;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.classList.toggle("is-active");
  }

  toggleTheme() {
    this.darkThemeToggle.nativeElement.classList.toggle("is-outlined");
    if(this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    }
    else {
      this.themeService.setDarkTheme();
    }
  }
}
