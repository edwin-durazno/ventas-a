import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]

interface ItemCarrito {
  producto: Product;
  cantidad: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos: Product[] = [];
  productoSeleccionado: Product | null = null;
  carrito: ItemCarrito[] = [];

  constructor(private productService: Products) {
    this.productos = this.productService.getProducts();
  }

  // Modal
  abrirDetalles(producto: Product) {
    this.productoSeleccionado = producto;
  }

  cerrarDetalles() {
    this.productoSeleccionado = null;
  }

  // Carrito
  agregarAlCarrito(producto: Product) {
    const item = this.carrito.find((item) => item.producto.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }
  }

  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
  }

  get totalCarrito(): number {
    return this.carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }

  // Login (si decides conservarlo)
  mostrarLogin: boolean = false;
  usuario: string = '';
  contrasena: string = '';

  iniciarSesion() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      alert('Inicio de sesión exitoso');
      this.mostrarLogin = false;
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

