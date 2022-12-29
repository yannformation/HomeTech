import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>( "https://fakestoreapi.com/products"
    )
    .pipe(map((res : any)=>{
      return res;
    }))
  }

  postAdmin(data: any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  getAdmin(data: any){
    return this.http.get<any>("http://localhost:3000/posts", data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  updateAdmin(data: any, id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  deleteAdmin(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
}
