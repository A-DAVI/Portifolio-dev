import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = 'Davi Cassoli';
  subtitle = 'Desenvolvedor';
  bio = 'Desenvolvedor Back-End com experiência em Java e Python, focado em automações e sistemas para processos contábeis. Atualmente aprendendo Angular para expandir para desenvolvimento full-stack.';

  links = {
    github: 'https://github.com/A-DAVI',
    linkedin: 'https://www.linkedin.com/in/davi-cassoli/',
  };
}
