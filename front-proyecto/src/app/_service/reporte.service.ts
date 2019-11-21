import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { path } from '../config.module';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private basePath:string = path.path;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  //HANDLE ERROR
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Un error ha ocurrido:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: `, error.error);
    }
    return throwError(
      'Algo malo sucedio, por favor intentarlo más tarde D:');
  };

  //CREATE
  public getReporte1(data:any) : Observable<any> {
    let url = `${this.basePath}reporte1`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte2(data:any) : Observable<any> {
    let url = `${this.basePath}reporte2`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte3(data:any) : Observable<any> {
    let url = `${this.basePath}reporte3`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte4(data:any) : Observable<any> {
    let url = `${this.basePath}reporte4`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte5(data:any) : Observable<any> {
    let url = `${this.basePath}reporte5`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte6(data:any) : Observable<any> {
    let url = `${this.basePath}reporte6`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  //CREATE
  public getReporte7(data:any) : Observable<any> {
    let url = `${this.basePath}reporte7`;
    return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }


}
