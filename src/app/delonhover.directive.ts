import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDelonhover]'
})
export class DelonhoverDirective implements OnInit{

  ngOnInit(): void {
  
  }

  @HostListener('mouseenter') onMouseEnter (eventData: Event) {
    this.el.nativeElement.children[2].children[0].classList.add('hover')
    this.el.nativeElement.classList.add('itemBackground')
  }

  @HostListener('mouseleave') onMouseLeave (eventData: Event) {
    this.el.nativeElement.children[2].children[0].classList.remove('hover')
    this.el.nativeElement.classList.remove('itemBackground')
  }
  constructor(private el: ElementRef, private rd: Renderer2) {
 
   }


}
