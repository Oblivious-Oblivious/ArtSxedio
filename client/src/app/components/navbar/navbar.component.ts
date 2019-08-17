import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navBurger", { static: false }) navBurger: ElementRef;
  @ViewChild("navMenu", { static: false }) navMenu: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.classList.toggle("is-active");
    this.navMenu.nativeElement.style.setProperty("--mobile", true);
  }
}
