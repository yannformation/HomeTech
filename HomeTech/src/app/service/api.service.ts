<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
=======
import { Injectable } from '@angular/core';

>>>>>>> origin/components/profil
@Injectable({
  providedIn: 'root'
})
export class ApiService {

<<<<<<< HEAD
  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>( "https://fakestoreapi.com/products"
    )
    .pipe(map((res : any)=>{
      return res;
    }))
  }
=======
  constructor() { }
>>>>>>> origin/components/profil
}
