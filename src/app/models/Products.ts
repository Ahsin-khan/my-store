export class Products {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
  
    constructor() {
      this.id = 1;
      this.name = '';
      this.price = 0;
      this.url = '';
      this.description = ''
    }
  }

  export class ProductsInCart {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity: number;

    constructor() {
      this.id = 1;
      this.name = '';
      this.price = 0;
      this.url = '';
      this.description = '';
      this.quantity = 0;
    }
  }

  
  export class OrderConfirmation{
    id: number;
    name: string;
    price: number;

    constructor(){
      this.id = 1;
      this.name = '';
      this.price = 0;
    }

  }