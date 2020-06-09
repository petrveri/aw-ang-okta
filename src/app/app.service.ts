import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private protocol = 'http://';
  private resourceHost = '192.168.56.1';
  private resourceHostPort = this.resourceHost + ':8080';

  constructor(
    private http: HttpClient){}

  setResourceHostPort(resourceHostPort) {
    this.resourceHostPort = resourceHostPort;
  }
  getResourceHostPort() {
    return this.resourceHostPort;
  }

  getListHttp<T>(operation = 'operation', resourcePath, result: T[]): Observable<T[]> {
    let resourceUrl = this.protocol + this.resourceHostPort + resourcePath;
    return this.http.get<T[]>(resourceUrl)
    .pipe(
      catchError(this.handleError<T[]>(operation, []))
    );
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
