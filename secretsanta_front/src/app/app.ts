import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Spa } from './spa/spa';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Spa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
