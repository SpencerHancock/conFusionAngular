import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/Leaders';
import { Leader } from '../shared/Leader';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(3000));
  }
  getFeaturedLeader(): Observable<Leader>{
    return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));

  }

  getLeader(id:string): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.id===id)[0]).pipe(delay(2000)); 
  }
}
