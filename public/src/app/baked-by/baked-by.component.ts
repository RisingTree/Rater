import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-baked-by',
  templateUrl: './baked-by.component.html',
  styleUrls: ['./baked-by.component.css']
})
export class BakedbyComponent implements OnInit, OnChanges {
  @Input() bakedby: any;
  @Input() thisavg: any;
  ratings = {};
  constructor() { }

  ngOnInit() {
    console.log(this.bakedby)
  }
  ngOnChanges() {
    this.thisavg = this.getAvg();
    this.ratings = this.bakedby.rates;
    console.log(this.ratings);
  }
  getAvg(): number {
    let sum: number = 0;
    for (let i of this.bakedby.rates) {
      sum += parseInt(i.stars);
    }
    sum /= this.bakedby.rates.length;
    return sum;
  }
}