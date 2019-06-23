
import {Injectable} from '@angular/core';
import { Iproduct } from './product';

@Injectable({
    providedIn : 'root'
})
export class ProductService {

     getProducts(): Iproduct[] {

        return [

            {

                "productId" : 2,
                "productName": "Garden Cart",
                "productCode" : "PNF - 0033",
                "releaseDate": "March 18, 2016",
                "description" : "Motha fucka nigga!",
                "price" : 32.99,
                "starRating" : 1.4,
                "imageUrl" : "assets/Images/map.jpg"
     
     
           },
     
     
           {
     
                "productId" : 3,
                "productName": "Hammer",
                "productCode" : "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description" : "Fuck you!",
                "price" : 32.99,
                "starRating" : 4.2,
                "imageUrl" : "assets/Images/map.jpg"
     
     
           }
     
           ,
     
           {
     
                "productId" : 3,
                "productName": "Pechkas",
                "productCode" : "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description" : "Fuck you!",
                "price" : 32.99,
                "starRating" : 3.6,
                "imageUrl" : "assets/Images/map.jpg"
     
     
           }

        ];


     }

    }


