import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { OrderConfirmation } from '../../models/Products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit{

  confirmationInfo: OrderConfirmation = {
    id: 0,
    name: '',
    price: 0
  };

  constructor(
    private confirmationService: ConfirmationService,
    private cartService: CartService
  ){
  }
  ngOnInit(): void {
    this.confirmationService.getConfirmation().subscribe(items => {
      this.confirmationInfo = items;
    });
      this.cartService.clearCart();  
  }
}
