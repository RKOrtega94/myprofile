import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavList = [
    { path: '/home', title: 'Home', icon: 'bx-home' },
    { path: '/about', title: 'About', icon: 'bx-user' },
    { path: '/resume', title: 'Resume', icon: 'bx-file-blank' },
    { path: '/portfolio', title: 'Portfolio', icon: 'bx-book-content' },
    /* { path: '/photography', title: 'Photography', icon: 'bx-images' }, */
    { path: '/services', title: 'Services', icon: 'bx-server' },
    { path: '/contact', title: 'Contact', icon: 'bx-envelope' },
  ];
  routeName: string;
  isOpen: boolean = false;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.routeName = this.router.url;
  }

  ngOnInit(): void {}

  toggleNav(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(this.document.body, 'mobile-nav-active');
    }
  }
}
