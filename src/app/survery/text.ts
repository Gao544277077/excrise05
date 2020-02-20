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
  dataForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(10),
    date: new FormControl(new Date()),
    state: new FormControl(this.states[0]),
    duplicate: new FormControl('false'),
    ice_cream: new FormControl(this.icecreams[0]),
    meal: new FormControl(''),
    coffee: new FormControl(''),
    music: new FormControl(''),
    movie: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
    if (this.submit === null) {
      this.submit = [{}];
    }
  }

  check_name() {
    this.submit.forEach((e: {'name': string}) => {
      console.log(e.name + '    ' + this.dataForm.value.name);

    // tslint:disable-next-line:align
    if (e.name === this.dataForm.value.name) {
      this.dataForm.value.duplicate = true;
      return;
    }
    else {
      this.dataForm.value.duplicate = false;
    }
     return this.dataForm.value.duplicate;
  });
  }
  submitForm() {

  this.check_name();
  if (this.dataForm.value.age < 10 || this.dataForm.value.age > 100) {
      alert('enter the correct age');
      return;
  } else if (this.dataForm.value.duplicate) {
      alert("You have already fill out the Form");
    return;
   }
    else {
      let submitdata = {
      name: this.dataForm.value.name,
      email: this.dataForm.value.email,
      age: this.dataForm.value.age,
      date: new Date,
      state: this.dataForm.value.state,
      submit_count: this.dataForm.value.submit_count,
      submit_status: this.dataForm.value.duplicate,
      ice_cream: this.dataForm.value.ice_cream,
      meal: this.dataForm.value.meal,
      coffee: this.dataForm.value.coffee,
      music: this.dataForm.value.music,
      movie: this.dataForm.value.movie,
    };
   this.submit.push(submitdata);
   this.dataForm.value.duplicate = false;
   localStorage.setItem('test', JSON.stringify(this.submit));
   alert(JSON.stringify(this.submit));
   return;
  }
}
}
