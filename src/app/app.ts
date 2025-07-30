import { Component } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { Header } from './components/header/header';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'the-little-archive';
  currentPage: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('login')) {
        this.currentPage = 'Login';
      } else if (event.urlAfterRedirects.includes('resources')) {
        this.currentPage = 'Resources';
      } else if (event.urlAfterRedirects.includes('about')) {
        this.currentPage = 'About';
      } else {
        this.currentPage = '';
      }
    });
  }
}
