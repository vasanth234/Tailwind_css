import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  products$:Observable<any>
  constructor(private productSrv : ProductService){
    this.products$ = this.productSrv.getCategory().pipe(
      map((item:any)=>{
        return item.data
      })
    );
  }
  getAllCategory(){

  }

}
