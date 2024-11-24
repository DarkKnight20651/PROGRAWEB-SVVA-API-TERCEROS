import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeComponent } from "../home/home.component";
import { ProductListComponent } from '../components/product-list/product-list.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, HomeComponent,ProductListComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
