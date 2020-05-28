import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: false,
  };

  constructor(
    private http: HttpClient
  ) {
  }

  // get请求
  getData(url, data, options?): Observable<any> {
    const urlp =
      url +
      new HttpParams({
        fromObject: data,
      });
    return this.http.get(urlp, {...this.options, ...options});
  }

  // post body方式请求
  postData(url, data, bodyData, options?): Observable<any> {
    return this.http.post(
      url +
      new HttpParams({
        fromObject: data,
      }),
      bodyData,
      {...this.options, ...options},
    );
  }
}
