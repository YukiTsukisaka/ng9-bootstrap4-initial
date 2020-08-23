import { Component, OnInit } from '@angular/core';
import { GnaviAPIService } from '../gnavi-api.service'

@Component({
  selector: 'app-selectform',
  templateUrl: './selectform.component.html',
  styleUrls: ['./selectform.component.scss']
})
export class SelectformComponent implements OnInit {

  data = '';
  rest = '';

  constructor(private gnavi: GnaviAPIService) { }

  ngOnInit(): void {
    this.getRestaurant('AREA110');
  }

  getRestaurant(area: string) {
    const restSearchObservable = this.gnavi.getRestSearch(area);
    restSearchObservable.subscribe(
      (data) => {
        console.log('次のデータが出力されました。');
        console.log(data);
        this.data = data;
        this.rest = data.rest;
      },
      (err) => {
        console.log('次のエラーが発生しました。');
        console.log(err);
      }
    )
  }
}
