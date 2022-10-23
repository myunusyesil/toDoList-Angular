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

  childEl: ElementRef | undefined;
  
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

  onEnter(event: any, text: string) {
    event.preventDefault();
    const d = new Date;
    this.id += d.getDate(); 
    this.inputText = text;
    this.listItem = {id : this.id, text: this.inputText, isComp: this.isCompleted};
    // console.log(this.listItem);
    this.listArr.push(this.listItem);
    // console.log(this.listArr);

    this.el.nativeElement.value = "";
    // console.log(this.el.nativeElement)
  }

  
}
