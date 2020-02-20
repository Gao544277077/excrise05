import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  database = JSON.parse(localStorage.getItem('test'));
  // tslint:disable-next-line:variable-name
  ice_creamlist = {a: 0 , b : 0, c: 0, other: 0};
  meallist = {breakfast: 0 , lunch: 0, dinner: 0};
  music = {rock: 0, pop: 0, classical: 0, metal: 0, country: 0};
  constructor() {
    this.get_ice_cream();
  }
  // ice_creamlist: [string];
  ngOnInit(): void {
    if (this.database === null) {
        this.database = [{}];
    }
  }
  get_ice_cream() {

    this.database.forEach((e: {'ice_cream': string, 'meal': string, 'music': string}) => {
      if ( e.ice_cream === 'a') {
        this.ice_creamlist.a++;
      } else if (e.ice_cream === 'b') {
        this.ice_creamlist.b ++;
      } else if (e.ice_cream === 'c') {
        this.ice_creamlist.c ++;
      } else {
        this.ice_creamlist.other ++;
      }
      if (e.meal === 'breakfast') {
        this.meallist.breakfast++;
      } else if (e.meal === 'lunch') {
        this.meallist.lunch++;
      } else {
        this.meallist.dinner++;
      }
      if ( e.music === 'rock') {
         this.music.rock++;
      } else if (e.music === 'pop') {
        this.music.pop++;
      } else if (e.music === 'classical') {
        this.music.classical++;
      } else if (e.music === 'metal') {
        this.music.metal++;
      } else {
        this.music.country++;
      }

    });
  }

}
