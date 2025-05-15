import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title,) { }

  public showTitle(titleName:string) {
    titleName = 'Saral Apps' +' | ' + titleName;
    this.title.setTitle(titleName);
  }

}
