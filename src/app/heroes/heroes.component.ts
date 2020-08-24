import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    stand: 'Star Platinum',
    name: 'Jotaro Kujo'
  };

  constructor() { }

  ngOnInit(): void {
  }
}