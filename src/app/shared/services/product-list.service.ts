import { Injectable } from '@angular/core';
import { IProduct } from '../../product-list/product';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
