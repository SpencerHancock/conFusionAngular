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

  getFeaturedDish(): Dish{
    return ( DISHES.filter((dish) => dish.featured)[0]);

  }

  getDish(id:string): Dish {
    return (DISHES.filter((dish) => dish.id===id)[0]);
  }

  constructor() { }
}
