import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/service/products-data.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any;
  actualProducts:any;
  constructor( private prodData:ProductsDataService) { }
  ngOnInit(): void {
    this.prodData.getProducts().subscribe(prod => {
      return {
        first:this.products = prod,
        second:this.actualProducts = prod.slice(0,5)
      };
    }, err => {
      console.log(err);
    });

  }
}
