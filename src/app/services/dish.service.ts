import { Injectable } from '@angular/core';
import { DISHES } from '../shared/Dishes';
import { Dish } from '../shared/Dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Dish[]{
    return DISHES;
  }

  constructor() { }
}
