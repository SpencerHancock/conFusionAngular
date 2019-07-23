import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { Dish } from '../shared/Dish';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/Leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promotion: Promotion;

  dish: Dish;

  leader:Leader;

  constructor(private promotionService:PromotionService, private dishService:DishService, private leaderService:LeaderService) { }

  ngOnInit() {
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.dish = this.dishService.getFeaturedDish();
    this.leader = this.leaderService.getFeaturedLeader();

  }

}
