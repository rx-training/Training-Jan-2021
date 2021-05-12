import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = '';

  @Input() defaultColor: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = 'bold';
    this.el.nativeElement.style.fontSize = '30px';
  }

}
