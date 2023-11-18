import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [CommonModule, RouterOutlet, MeuComponenteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  helloWord = {
    message: 'olá, Mundo!'
  }
}
