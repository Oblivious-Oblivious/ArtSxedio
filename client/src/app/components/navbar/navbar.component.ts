import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navBurger", { static: false }) navBurger: ElementRef;
  @ViewChild("navMenu", { static: false }) navMenu: ElementRef;
  @ViewChild("darkThemeToggle", { static: false }) darkThemeToggle: ElementRef;

  constructor() {
    // const toggleSwitch = document.querySelector('.dark-theme-toggle');

    // function switchTheme(e) {
    //   if (e.target.checked) {
    //     document.documentElement.setAttribute('data-theme', 'dark');
    //   }
    //   else {
    //     document.documentElement.setAttribute('data-theme', 'light');
    //   }
    // }
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.style.setProperty("--mobile", true);
  }

  switchTheme() {
    this.darkThemeToggle.nativeElement.classList.toggle("is-outlined");
  }
}
