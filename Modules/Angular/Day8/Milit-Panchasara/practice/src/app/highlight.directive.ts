import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  elem:any =null;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue');
  }
  
  private highlight(color: string) {
    (<ElementRef>this.elem).nativeElement.style.backgroundColor = color;
  }

  constructor(el: ElementRef) {
    this.elem = el;
    el.nativeElement.style.backgroundColor = 'green';
    el.nativeElement.style.color = 'red';
  }

  
}
