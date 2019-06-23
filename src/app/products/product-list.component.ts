
import {Component, OnInit} from '@angular/core';
import {Iproduct} from './product';
import { ProductService } from './product.service';


@Component ({

   selector : 'pm-products',
   templateUrl : './product-list.component.html',
   styleUrls : ['./product-list.component.css']

}

)
export class ProductListComponent implements OnInit {

   pageTitle : string = 'Product List';
   imageWidth : number = 75;
   imageMargin : number = 2;
   showImage : boolean = false;
   //listFilter : string = 'cart';


   _listFilter : string;

   get listFilter():string {
     
    return this._listFilter;

   }

   set listFilter(value:string) {
     
    this._listFilter = value;
    this.filterProducts = this._listFilter? this.performFilter(this.listFilter): this.products;

   }

   filterProducts : Iproduct[];
   products : Iproduct[] ;



   constructor(private productService : ProductService) {

  
   }

   performFilter(filterBy: string): Iproduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: Iproduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy ) !== -1);

   }


   toggleImage():void {

     this.showImage = !this.showImage;

   }

   ngOnInit(): void {

    this.products = this.productService.getProducts();
    this.filterProducts = this.products;
   }


   onRatingClicked(message:string): void {
     
       this.pageTitle = 'Product List ' + message;
       
   }

}