import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PhilosophyCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-philosophy',
  imports: [CommonModule],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.css',
})
export class Philosophy {
 philosophyCards: PhilosophyCard[] = [
    {
      icon: 'brain',
      title: 'IA não substitui entendimento',
      description: 'Uso LLMs e agents com limites claros, validações e regras determinísticas quando necessário.'
    },
    {
      icon: 'zap',
      title: 'Automação é responsabilidade',
      description: 'Reduzir esforço humano também significa reduzir riscos e garantir confiabilidade.'
    },
    {
      icon: 'code',
      title: 'Back-end sólido, front-end em construção',
      description: 'Java e Python no core, Angular no aprendizado. Full-stack como objetivo.'
    },
    {
      icon: 'target',
      title: 'Simplicidade escala melhor',
      description: 'Código direto e manutenível vence abstrações complexas.'
    },
    {
      icon: 'search',
      title: 'Sistemas observáveis',
      description: 'Prefiro código que explica o que faz. Debug é parte do design.'
    }
  ];

  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
      zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
      target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
      search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'
    };
    return icons[iconName] || '';
    }

}
