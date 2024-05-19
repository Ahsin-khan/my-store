import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsInCart } from '../../models/Products';
import { ConfirmationService } from '../../services/confirmation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductsInCart[] = []; 
  id: number = 0;
  userName: string = '';
  userAddress: string = '';
  userCreditCard: string = '';

  totalPrice: number = 0;
  quantities: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // 1 to 10

  constructor(
    private cartService: CartService,
    private confirmationService: ConfirmationService,
    private router: Router  // <-- Add Router here

  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.calculateTotalPrice()
  }

  ngDoCheck(): void {
    this.calculateTotalPrice();
  }
 
  calculateTotalPrice(): void {
    const totalPriceWithDecimals = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.totalPrice = Number(totalPriceWithDecimals.toFixed(2)); // Round to two decimal places
  }
  

  onSubmit() {
    const userInfo = {
      id: Date.now(),
      name: this.userName,
      price :this.totalPrice
    };
    this.confirmationService.confirmation(userInfo);

    this.router.navigate(['/confirmation']);
  }
}
