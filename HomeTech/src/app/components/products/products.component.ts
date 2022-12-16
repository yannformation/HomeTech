<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
=======
import { Component } from '@angular/core';
>>>>>>> origin/components/profil

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
<<<<<<< HEAD
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor(private api : ApiService){

  }
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })

  }
=======
export class ProductsComponent {

>>>>>>> origin/components/profil
}
