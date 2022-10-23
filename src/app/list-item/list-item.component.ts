import { Component, ElementRef, Renderer2, Input, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() listItem!: { id: number; text: string; isComp: boolean; };
  @ViewChild('child') chil!: ElementRef<any>;
  
  constructor(private _elementRef: ElementRef, private rd: Renderer2, private _localStorageService: LocalstorageService) { }

  listArr:Array<any> = []; 

  ngOnInit(): void {
  }

  onClickDel(event: any, element: any, listItem: {id: number, text: string, isComp: boolean}) {
    // debugger;
    // console.log(item)
    // console.log (this.chil);
    this.chil = element;

    console.log(element.innerText);
    this._localStorageService.removeFromLocalStorage(listItem.id);    
    this.rd.setStyle(this.chil, 'display', 'none');
  }

  onCheckBoxClick(event: any, listItem: {id: number, text: string, isComp: boolean}) {
 
    console.log(listItem);
    if ( listItem.isComp == false) {
    event.target.parentElement.classList.add("checked");
    listItem.isComp = true;
    }
    else {
      event.target.parentElement.classList.remove("checked");
      listItem.isComp = false;
    }
    // console.log(this.listArr)
  }

}
