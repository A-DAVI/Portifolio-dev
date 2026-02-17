import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar} from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Philosophy } from './components/philosophy/philosophy';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Stats } from './components/stats/stats';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Navbar, 
    Hero, 
    Philosophy, 
    Skills, 
    Projects, 
    Stats, 
    Contact, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Davi Cassoli';
}
