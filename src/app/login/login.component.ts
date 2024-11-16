import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule, FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private servicio: UserService) { }

  iniciarSesion(email: string, password: string): void {
    console.log('Email:', email);
    console.log('Password:', password);
  
    this.servicio.getUsers().subscribe(
      (users: any[]) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/welcome']);
        } else {
          console.error('Credenciales inválidas');
          alert('Email o contraseña incorrectos');
        }
      },
      error => {
        console.error('Error al obtener usuarios:', error);
        alert('Hubo un error al iniciar sesión.');
      }
    );
  }
  
}
