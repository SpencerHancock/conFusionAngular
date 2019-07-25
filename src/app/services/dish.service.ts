import { Injectable } from '@angular/core';
import { DISHES } from '../shared/Dishes';
import { Dish } from '../shared/Dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Promise<Dish[]>{
    return Promise.resolve(DISHES);
  }

  getFeaturedDish(): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);

  }

  getDish(id:string): Promise<Dish> {
    return Promise.resolve((DISHES.filter((dish) => dish.id===id)[0]));
  }

  constructor() { }
}
