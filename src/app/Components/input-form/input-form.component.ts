import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {

  height!: number;
  weight!: number;
  bmi!: number;
  result!: string;


  constructor() {
    this.bmi = 0;
  }

  calculateBmi(height: number, weight: number): number {
    console.log("Calculate BMI");

    this.bmi = Number(((703 * Number(this.weight)) / (Number(this.height) * Number(this.height))).toFixed(2));


    switch (true) {
      case (this.bmi < 16):
        this.result = "You are Severely Underweight!";
        break;
      case (this.bmi >= 16 && this.bmi < 18.5):
        this.result = "You are Underweight!";
        break;

      case (this.bmi >= 18.5 && this.bmi < 25):
        this.result = "You are Normal!";
        break;

      case (this.bmi >= 25 && this.bmi < 30):
        this.result = "You are Overweight!";
        break;

      case (this.bmi >= 30):
        this.result = "You are Obese!";
        break;

      default:
        this.result = "Please enter a valid number";
        break;
    }

    return 0;
  }
}
