import { Component,  OnInit,  ViewChild} from '@angular/core';
import {ElementRef, Renderer2} from '@angular/core';
import { ListObjectModel } from './list-object.model';
import { LocalstorageService } from './localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private rd: Renderer2, private _localStorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.listArr = this._localStorageService.getLocalStorage();
  }


  @ViewChild('input') el!: ElementRef;
  @ViewChild('parent') par!: ElementRef;

  childEl: ElementRef | undefined;
  list: Array<any> | undefined;
  
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

  onEnter(event: any, text: string) {
    event.preventDefault();
    const d = new Date;
    this.id = d.getTime();
    this.inputText = text;
    this.listItem = {id : this.id, text: this.inputText, isComp: this.isCompleted};
    // console.log(this.listItem);
    
    this.listArr.push(this.listItem);
    // console.log(this.listArr);

    this.el.nativeElement.value = "";
    // console.log(this.el.nativeElement)
    // setting local storage
    this._localStorageService.setLocalStorage(this.listArr);

    if( (this.listArr.length) == 0 ) {
      this._localStorageService.clearLocalStorage();
    }
  }
  
    
  
}
