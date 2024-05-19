import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/Products';
import { ProductListService } from '../../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent implements OnInit{
  productId: number;
  product: Products;
  selectedQuantity: number = 1;


  constructor(
    private route : ActivatedRoute, 
    private productListService: ProductListService, 
    private cartService: CartService
  ) {
    this.productId = 0;
    this.product = new Products(); // Use the constructor of the Products class
  }
  ngOnInit(): void {
      // Retrieve the product ID from the route parameters
      this.route.params.subscribe(params => {
        this.productId = +params['id']; // Convert to number
        // Fetch product details using the product ID
        this.productListService.getProductById(this.productId).subscribe(product => {
          if (product) {
            this.product = product;
          } else {
            console.error('Product not found');
          }
        });
      });
  }


  onSubmit() {
    const productWithQuantity = {
      ...this.product,
      quantity: this.selectedQuantity
    }

    alert("Added to cart");

    this.cartService.addToCart(productWithQuantity);
  }

}
