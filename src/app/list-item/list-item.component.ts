import { Component, ElementRef, Renderer2, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  listArr:Array<Object> = []; 

  ngOnInit(): void {
    this.listArr = this._localStorageService.getLocalStorage();
  }

  @Input() listItem!: { id: number; text: string; isComp: boolean; };
  @ViewChild('child') chil!: ElementRef<any>;
  
  constructor(private _elementRef: ElementRef, private rd: Renderer2, private _localStorageService: LocalstorageService) { }

  onClickDel(event: any, element: any, listItem: {id: number, text: string, isComp: boolean}) {
    
    // console.log(item)
    // console.log (this.chil);
    this.chil = element;

    this._localStorageService.removeFromLocalStorage(listItem.id);    
    this.rd.setStyle(this.chil, 'display', 'none');
    // debugger;
    if(this.listArr.length == 0) {
      this._localStorageService.clearLocalStorage();
    }
  }

  onCheckBoxClick(event: any, element: any, listItem: {id: number, text: string, isComp: boolean}) {

    // console.log(listItem);
    this.chil = element;
    if ( listItem.isComp == false) {
      this.rd.addClass(this.chil, 'checked');
    // event.target.parentElement.classList.add("checked");
    listItem.isComp = true;
    }
    else {
      this.rd.removeClass(this.chil, 'checked');
      // event.target.parentElement.classList.remove("checked");
      listItem.isComp = false;
    }
    // console.log(this.listArr)
    // change checkbox value
    this._localStorageService.editLocalStorage(listItem.id, listItem.isComp)

  }



}
