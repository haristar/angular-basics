import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DiService{
  demo = ["hello", "world", "angular", "di"]

  getAll(){
    return this.demo
  }

  getOne(index: number){
    return this.demo[index]
  }
}
