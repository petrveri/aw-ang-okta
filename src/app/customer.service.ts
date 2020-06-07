import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private customersProtocol = 'http://';
  private resourceServerIp = '192.168.56.1';
  private customersHostPort = this.resourceServerIp + ':8080';
  private customersPath = '/api/saleslt/customers';  // Path to web api'

  constructor(
    private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    let customersUrl = this.customersProtocol + this.customersHostPort + this.customersPath;
    return this.http.get<Customer[]>(customersUrl)
    .pipe(
      catchError(this.handleError<Customer[]>('getCustomers', []))
    );
  }

  setCustomerResourceHostPort(hostPort) {
    this.customersHostPort = hostPort;
  }
  getCustomerResourceHostPort() {
    return this.customersHostPort;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
