import { Component, OnInit } from '@angular/core';
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
    { path: '/services', title: 'Services', icon: 'bx-server' },
    { path: '/contact', title: 'Contact', icon: 'bx-envelope' },
  ];
  routeName: string;
  constructor(private router: Router) {
    this.routeName = this.router.url;
  }

  ngOnInit(): void {}
}
