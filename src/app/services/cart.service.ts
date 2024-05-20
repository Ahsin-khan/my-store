import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsInCart } from '../models/Products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ProductsInCart[] = [];
  private cartItemsSubject: BehaviorSubject<ProductsInCart[]> = new BehaviorSubject<ProductsInCart[]>([]);

  constructor() { }

  addToCart(product: ProductsInCart) {
    const existingProductIndex = this.cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      this.cartItems[existingProductIndex].quantity = product.quantity;
    } else {
      this.cartItems.push(product);
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }


  updateCart(cartItems: ProductsInCart[]) {
    this.cartItems = cartItems;
    this.cartItemsSubject.next(this.cartItems);
  }


  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(this.cartItems);
  }


  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
} 
