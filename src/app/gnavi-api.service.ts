import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GnaviAPIService {

  constructor(private http: HttpClient) { }

  /**
   * レストラン検索APIを呼び出す
   */
  getRestSearch(area :string): Observable<any> {
    console.log('レストラン検索API');
    const apiURI:string = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
    const apiKey:string = 'e58fa02009f637ab8b88adfd03babbf4';
    const params:string = '&area=' + area;
    return this.http.get(apiURI + '?keyid=' + apiKey + params);
  }

}
