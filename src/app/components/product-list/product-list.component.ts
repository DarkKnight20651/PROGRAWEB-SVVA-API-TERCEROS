import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../services/products.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; // Importar para ngModel

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgxPaginationModule, FormsModule],
  providers: [ProductsService],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  currentPage: number = 1;
  selectedProduct: any = null;
  editableProduct: any = null;
  searchQuery: string = ''; // Campo de búsqueda

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  // Filtra los productos según el campo de búsqueda
  filteredProducts(): any[] {
    const query = this.searchQuery.toLowerCase();
    return this.products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.id.toString().includes(query) ||
        product.price.toString().includes(query)
    );
  }

  showDetails(product: any): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  editProduct(product: any): void {
    this.editableProduct = product;
  }

  saveEdit(product: any): void {
    this.editableProduct = null;
    alert(`Producto actualizado: ${product.title}`);
  }

  deleteProduct(productId: number): void {
    const confirmDelete = confirm('¿Estás seguro de eliminar este producto?');
    if (confirmDelete) {
      this.products = this.products.filter((p) => p.id !== productId);
      alert(`Producto con ID ${productId} eliminado.`);
    }
  }
}
