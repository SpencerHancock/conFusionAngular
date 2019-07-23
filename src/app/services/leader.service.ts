import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/Leaders';
import { Leader } from '../shared/Leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS
  }
  getFeaturedLeader(): Leader{
    return ( LEADERS.filter((dish) => dish.featured)[0]);

  }

  getDish(id:string): Leader {
    return (LEADERS.filter((dish) => dish.id===id)[0]);
  }
}
