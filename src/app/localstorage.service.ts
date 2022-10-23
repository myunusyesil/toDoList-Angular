import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  getLocalStorage () {
    return JSON.parse(localStorage.getItem("list") || ""); 
  } 

  setLocalStorage ( arr: Array<any>) {
    localStorage.setItem('list', JSON.stringify(arr));
  }

  removeFromLocalStorage(id: number) {
    let items = this.getLocalStorage();
    console.log(id);
    items = items.filter( (item: { id: number; })  => {
        if (item.id !== id) {
        return item;
        }  
        return;
    })
    console.log (items);
    return localStorage.setItem('list', JSON.stringify(items));
}

  clearLocalStorage () {
    localStorage.clear();
  }

  constructor() { }
}
