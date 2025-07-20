import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './pages/home/home'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'the-little-archive';
}
