import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getCakes(){
    return this._http.get("/allCakes");
  }
  addCakes(baker , image){
    return this._http.post("/newCake",{ baker: baker, image:image});
  }
  addRate(id,stars,comment){
    return this._http.put("/updateCake", { _id:id, stars:stars, comment:comment});
  }
  getId(id){
    return this._http.get('/cakes/' + id);
  }
}
