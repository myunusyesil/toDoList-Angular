import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  getLocalStorage () {
    return (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list') || ""):[];
  } 

  setLocalStorage ( arr: Array<any>) {
    localStorage.setItem('list', JSON.stringify(arr));
  }
  
  removeFromLocalStorage(id: number) {
    let items = this.getLocalStorage();
    // console.log(id);
    items = items.filter( (item: { id: number; })  => {
        if (item.id !== id) {
        return item;
        }  
        return;
    })
    // console.log (items);
    localStorage.setItem('list', JSON.stringify(items));
}

  clearLocalStorage () {
    localStorage.clear();
  }

  editLocalStorage (editID: number, isComp:boolean) {
    let items = this.getLocalStorage();
    items = items.map(function(item: { id: number; isComp: boolean; }) {
        if (item.id == editID ) {
            item.isComp = isComp;
            return item;
        }
        else {
        return item; }
    })
    localStorage.setItem('list', JSON.stringify(items));
}


  constructor() { }
}
