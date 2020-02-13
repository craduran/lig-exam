import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentCount: number;
  under = 3;
  sliderlength = 3;
  constructor() { }

  ngOnInit(): void {
    this.currentCount = 1;
  }
  next() {
    this.under = this.currentCount == 1 ? 3 : this.currentCount-1; 
    this.currentCount = this.currentCount != 3 ? this.currentCount + 1 : 1;
  }
  previous() {
    this.under = this.currentCount == 3 ? 1 : this.currentCount+1; 
    this.currentCount = this.currentCount != 1 ? this.currentCount - 1 : 3;
  }
  addClass = (index) => {
    var classnames = "";
    if(this.currentCount == index) {
      classnames += ' slider__slides__content--active';
    }
    if(this.currentCount == index + 1 || index+1 == this.sliderlength) {
      classnames += ' slider__slides__content--previous';
    }
    if(this.currentCount == index - 1 || index-1 == 0) {
      classnames += ' slider__slides__content--next';
    }
    if(this.under == 2) {
      classnames += ' slider__slides__content--under';
    }
  }
}
