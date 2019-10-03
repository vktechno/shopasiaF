import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppShareService {

  baseUrl:any = "";
  constructor(private http: HttpClient) { }

  public get(url) {
    let apiUrl:any = `${this.baseUrl}/${url}`;
    return this.http.get(apiUrl);
   }
 
   public post(url,reqJson) {
      let apiUrl:any = `${this.baseUrl}/${url}`;
      return this.http.post(apiUrl, reqJson);
    }

}
