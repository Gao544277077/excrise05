import { Component, OnInit } from '@angular/core';
import {FormGroup, Validator, FormControl} from '@angular/forms';
@Component({
  selector: 'app-survery',
  templateUrl: './survery.component.html',
  styleUrls: ['./survery.component.css']
})
export class SurveryComponent implements OnInit {
  states = ['Alabama', 'Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  icecreams = ['a', 'b' , 'c', 'other'];
  submit = JSON.parse(localStorage.getItem('test'));

  data = {
    name: '',
    email: '',
    age: 10 ,
    date: new Date,
    state: '',
    submit_count: 0,
    duplicate: false,
    ice_cream: 'a',
    meal: '',
    coffee: '',
    music: '',
    movie: ''
  };
  // dataForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   age: new FormControl(10),
  //   date: new FormControl(new Date()),
  //   state: new FormControl(this.states[0]),
  //   duplicate: new FormControl('false'),
  //   ice_cream: new FormControl(this.icecreams[0]),
  //   meal: new FormControl(''),
  //   coffee: new FormControl(''),
  //   music: new FormControl(''),
  //   movie: new FormControl(''),
  // });
  constructor() { }

  ngOnInit(): void {
    if (this.submit === null) {
      this.submit = [{}];
    }
  }

  check_name() {
    this.submit.forEach((e: {'name': string}) => {
      console.log(e.name + '    ' + this.data.name);

    if (e.name === this.data.name) {
        this.data.duplicate = true;
        return;
    }
    else {this.data.duplicate = false;
    }
    return this.data.duplicate ;
  });
  }
  submitForm() {

  this.check_name();
  if (this.data.age < 10 || this.data.age > 100) {
      alert('enter the correct age');
      return;
  } else if (this.data.duplicate) {
    alert("You have already fill out the Form");
    return;
   }
    else {
      let submitdata = {
      name: this.data.name,
      email: this.data.email,
      age: this.data.age,
      date: new Date,
      state: this.data.state,
      submit_count: this.data.submit_count,
      submit_status: this.data.duplicate,
      ice_cream: this.data.ice_cream,
      meal: this.data.meal,
      coffee: this.data.coffee,
      music: this.data.music,
      movie: ''
    };
   this.submit.push(submitdata);
   this.data.duplicate = false;
   localStorage.setItem('test', JSON.stringify(this.submit));
   alert(JSON.stringify(this.submit));
   return;
  }
}
}


