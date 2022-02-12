import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://reqres.in/api';
  constructor(private http:HttpClient) { }

  login(users){
    let url= this.apiUrl + '/login';
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(users);
    console.log('my body data are', body);
    console.log('url', url);
    return this.http.post(url, body, { headers }).pipe(map((res: Response) => {
      res;
      return res
    })).pipe(catchError(
      (error: Response) => {
        return throwError(error);
      }));
  }
  get(){
    let url= this.apiUrl + '/users';
    console.log('url', url);
    return this.http.get(url).pipe(map((res) => {
      res;
      return res
    }));
  }
  update(data: any) {
    console.log("data" + data);
    let url= this.apiUrl + '/users';
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    console.log('my body data are', body);
    return this.http.put(url + '/' + data.id, body, { headers }).pipe(map((res: Response) => {
      res;
      console.log("res12", JSON.stringify(res));
      return res
    })).pipe(catchError(
      (error: Response) => {
        return throwError(error);
      }));
  }
  save(data: any){
    let url= this.apiUrl + '/users';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    console.log('my body data are', body);
    console.log('url', url);
    return this.http.post(url, body, { headers }).pipe(map((res: Response) => {
      res;
      return res
    })).pipe(catchError(
      (error: Response) => {
        return throwError(error);
      }));
  }
  delete(data: any){
    let url= this.apiUrl + '/users/'+ data;
    console.log("data.id", data);
    console.log('url', url);
    return this.http.delete(url ).pipe(map((res: any) => {
      res;
      console.log("res", res);
      return res
    })).pipe(catchError(
      (error: Response) => {
        return throwError(error);
      }));
  }

}
