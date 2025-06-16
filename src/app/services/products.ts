import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  detalles: string; //por que si 
}

@Injectable({
  providedIn: 'root'
})

export class Products {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Adorno 1',
      descripcion: 'Ideial para regalos y felicitaciones',
      precio: 800,
      imagen: '/img/adorno-2.jpg',
      detalles: 'Este adorno es perfecto para cumpleaños y ocasiones especiales.'
    },
    {
      id: 2,
      nombre: 'Adorno 2',
      descripcion: 'Este articulo es lo mejor para regalos especiales',
      precio: 1100,
      imagen: '/img/adorno-3.jpg',
      detalles: 'Un adorno único con detalles artesanales.'
    },
    {
      id: 3,
      nombre: 'Adorno 3',
      descripcion: 'Nuestro adorno mas cara que tenemos, solo para esa persona especial',
      precio: 2300,
      imagen: '/img/adorno-4.jpg',
      detalles: 'Un adorno para una persona realmente especial y que valga mucho la pena.'
    },
    {
      id: 4,
      nombre: 'Adorno 4',
      descripcion: 'El modelo mas economico que te',
      precio: 500,
      imagen: '/img/adorno-5.jpg',
      detalles: 'Un adorno quep puede llegar a ser para cualquier ocasion.'
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
}
