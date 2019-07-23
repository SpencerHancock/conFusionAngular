import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { GridColumnStyleBuilder } from '@angular/flex-layout/grid/typings/column/column';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: "", password:"", remember: false};

  constructor(public diaolgRef: MatDialogRef<LoginComponent> ) {}

  ngOnInit() {
  }

  onSubmit(){
    console.log("User:", this.user);
    this.diaolgRef.close();


  }
}
