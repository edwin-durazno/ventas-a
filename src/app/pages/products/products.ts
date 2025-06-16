import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true, // Si tu componente es independiente
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos : Product[] = [];

  //Agrego una variable para almacenar el producto seleccionado
productoSeleccionado: Product | null = null;

  constructor(private product:Products){
    this.productos = this.product.getProducts();
  }

   // 🔽 Método para abrir los detalles del producto
  abrirDetalles(producto: Product) {
    this.productoSeleccionado = producto;
  }

  // 🔽 Método para cerrar los detalles
  cerrarDetalles() {
    this.productoSeleccionado = null;
  }
}
