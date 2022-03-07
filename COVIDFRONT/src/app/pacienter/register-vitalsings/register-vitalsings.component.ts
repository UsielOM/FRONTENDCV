import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-vitalsings',
  templateUrl: './register-vitalsings.component.html',
  styleUrls: ['./register-vitalsings.component.css']
})
export class RegisterVitalsingsComponent implements OnInit {

  // source: https://codesandbox.io/s/angular-clock-forked-3czyl?file=/src/app/clock.component.css:0-30
  hours!: string;
  minutes!: string;
  seconds!: string;
  private timerId = 0;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentTime();
    // @ts-ignore
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

}
