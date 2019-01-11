import { PlaceLocation } from './PlaceLocation';
import { TestingRating } from './TestingRating';

export class Coffee {
  type: string;
  rating: string;
  notes: number;
  testingRating: TestingRating;

  constructor(public name: string = "", public place: string = "", public location: PlaceLocation = null) {
    this.location = new PlaceLocation();
  }

}