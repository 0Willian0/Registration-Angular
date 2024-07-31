import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title:'Inicio',
    icon:'home',
    routeUrl:'',
  })
  constructor() { }

  get HeaderData():Observable<HeaderData>{
    return this._headerData.asObservable()
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
