import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'Dating App';
  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => {
        this.users = response;
        console.log('Usuários recebidos: ', this.users);
      },
      error: (error) => {
        console.error('Erro ao buscar usuários: ', error);
      },
      complete: () => {
        console.log('Requisição concluída.');
      },
    });
  }
}
