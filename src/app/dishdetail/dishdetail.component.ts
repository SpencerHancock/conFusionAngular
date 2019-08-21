import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/Dish';
import { Location } from '@angular/common';
import { Params, ActivatedRoute} from '@angular/router';
import {DishService} from "../services/dish.service";
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { Rating } from "../shared/Rating";


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  ratingForm: FormGroup;
  rating: Rating;


  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  formErrors = {
    "author":"",
    "rating":"",
    "comment":""
  };

  validationMessages = {
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
    },
    'rating': {
      'required': 'Rating is required'
    }
  }


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location, 
    private fb: FormBuilder) { }

    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
      this.createForm();
      this.ratingForm.reset({
        fullname: "",
        rating: "5",
        comment: ""
      })
    }
  

  setPrevNext(dishId:string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm(){
    this.ratingForm = this.fb.group({
      author: ["", [Validators.required, Validators.minLength(2)]],
      rating: ["", Validators.required],
      comment: ["", Validators.required]
    });

    this.ratingForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onSubmit(){
    var date = new Date()
    this.ratingForm.value["date"] = date.toISOString();
    this.rating = this.ratingForm.value;
    this.ratingForm.reset({
      fullname: "",
      rating: "5",
      comment: ""
    })
  }

  onValueChanged(data?: any) {
    if (!this.ratingForm) { return; }
    const form = this.ratingForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }



}
