import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cakes ={};
  newCake ={baker:"", image:""};
  oneCake = {};
  newRate =[];
  avg: number = 0;
  constructor(private _http:HttpService){
    this.getCakes();
    this.newCake = {baker : "", image: ""};
  }
  getCakes(){
    this._http.getCakes().subscribe( (data:any) => {
      this.cakes = data;
      for(let x in data.data){
        this.newRate.push({ stars:"3", comment:""});
      }
      console.log(this.newRate);
    });
  }
  addCake(baker, image){
    this._http.addCakes(baker, image).subscribe(() => {this.getCakes()});
  }
  addRate(cake, rate){
    console.log(rate);
    this._http.addRate(cake._id, rate.stars, rate.comment ).subscribe((data) => {
      console.log(data);
      this._http.getId(cake._id).subscribe(data => {this.setCake(data)})
    })
  }
  setCake(data){
    let thisCake =data;
    this.oneCake = thisCake.data[0];
    this.calcAvg(this.oneCake);
  }
  showCake(cake){
    this.oneCake = cake;
    this.calcAvg(this.oneCake);
  }
  calcAvg(oneCake){
    this.avg = 0;
    for(let i of oneCake.rates){
      this.avg += parseInt(i.stars);
    }
    this.avg  /= oneCake.rates.length;
  }
}

