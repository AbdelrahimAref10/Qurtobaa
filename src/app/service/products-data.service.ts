import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  private _url:string = "assets/data.json";
  constructor(private http:HttpClient) { }
  getProducts() : Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this._url).pipe(catchError(err => {
      return throwError(err.message || "Server error");
    }));
  }
}
