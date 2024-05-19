import { Component, OnInit, Input} from '@angular/core';
import { Products } from '../../models/Products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Products;
  selectedQuantity: number = 1;

  constructor(private cartService: CartService) { 
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void { }

  onSubmit() {
    const productWithQuantity = {
      ...this.product,
      quantity: this.selectedQuantity
    }

    alert(`Added to cart`);

    this.cartService.addToCart(productWithQuantity);
  }
}

