import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/Dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {
  selectedDish: Dish;
  constructor() { }

  ngOnInit() {
  }

  @Input()
    dish: Dish;


}
