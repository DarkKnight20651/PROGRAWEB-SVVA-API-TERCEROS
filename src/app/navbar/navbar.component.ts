import { Component , OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
import { MatButtonModule } from '@angular/material/button';

import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,CommonModule,MatButtonModule,MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  avatar: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Obtén el nombre del usuario del localStorage al cargar el componente
    this.userName = localStorage.getItem('userName');
    this.avatar = localStorage.getItem('avatar');
  }

  logout(): void {
    // Elimina los datos del usuario al cerrar sesión
    localStorage.removeItem('userName');
    this.userName = null;
    this.router.navigate(['/login']); // Redirige al login
  }
}
