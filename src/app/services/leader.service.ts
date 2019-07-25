import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/Leaders';
import { Leader } from '../shared/Leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getFeaturedLeader(): Promise<Leader>{
    return Promise.resolve(( LEADERS.filter((dish) => dish.featured)[0]));

  }

  getDish(id:string): Promise<Leader> {
    return Promise.resolve((LEADERS.filter((dish) => dish.id===id)[0]));
  }
}
