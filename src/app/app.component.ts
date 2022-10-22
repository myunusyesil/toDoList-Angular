import { Component,  ViewChild} from '@angular/core';
import {ElementRef, Renderer2} from '@angular/core';
import { ListObjectModel } from './list-object.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('input') el!: ElementRef;
  @ViewChild('parent') par!: ElementRef;
  @ViewChild('child') chil!: ElementRef;
  
   listItem: ListObjectModel = {
    id: 0,
    text: "",
    isComp: false,
   };

   listArr:Array<any> = []; 

  title = 'toDoList';
  inputText : string = '';
  id: number = 0;
  isCompleted: boolean = false;


  constructor(private rd: Renderer2) {}

  onClickDel(event: any, child: any) {
    // debugger;
    // let item = event.target.parentElement.parentElement;
    // console.log(item)
    // item.style.display = 'none';
    this.chil.nativeElement = child;
    console.log (this.par,this.chil);
    this.rd.removeChild(this.par.nativeElement, this.chil.nativeElement);
  
  }

  onEnter(event: any, text: string) {

    event.preventDefault();
    const d = new Date;
    this.id += d.getDate(); 
    this.inputText = text;
    this.listItem = {id : this.id, text: this.inputText, isComp: this.isCompleted};
    // console.log(this.listItem);
    this.listArr.push(this.listItem);
    
    // console.log(this.el.nativeElement)
    this.el.nativeElement.value = "";
    // console.log(this.listArr);
 
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
