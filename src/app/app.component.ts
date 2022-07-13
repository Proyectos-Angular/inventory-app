import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-app';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/f62ec295-4bce-43e7-b332-18c87b98a6a1/zapatillas-personalizables-nike-by-you.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'https://americanleatherjacket.com/image/cache/Captain%20America%20The%20Winter%20Soldier%20Steve%20Rogers%20Blue%20Jacket%20001-600x900w.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'https://www.italsuit.com/images/P/PORKIE-BLACK.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product) {
    console.log(product)
  }

}
