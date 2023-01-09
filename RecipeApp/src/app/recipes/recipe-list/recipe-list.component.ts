import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('BananaBread', 'This is a bananabread ', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2020/05/Banana-Bread-7.jpg?w=745&ssl=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
