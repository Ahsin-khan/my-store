import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductsInCart, Products } from '../../models/Products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Products;
  @Output() addItem: EventEmitter<ProductsInCart> = new EventEmitter();

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

    this.addItem.emit(productWithQuantity);
  }
}

