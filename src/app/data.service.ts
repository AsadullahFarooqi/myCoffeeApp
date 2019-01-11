import { Injectable } from '@angular/core';

import { Coffee } from './logic/Coffee';
import { PlaceLocation } from './logic/PlaceLocation';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback){
 	const list = [
 	new Coffee("double ", "sunny cafe", new PlaceLocation("123, market", "san fransisco")),
 	new Coffee("caramel americano", "starcoffee", new PlaceLocation("gran bia", "madrid")),
 	];
   callback(list);
  }


  save(coffee, callback){
    callback(true);
  }

}
