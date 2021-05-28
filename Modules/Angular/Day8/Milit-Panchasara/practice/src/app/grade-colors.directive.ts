import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appGradeColors]'
})

export class GradeColorsDirective {


  @Input('appGradeColors') grade: string ;
  
  element = null;

  constructor(private el: ElementRef) {
    this.element = el;
   }

   ngOnInit() {
    console.log(this.grade);
    switch (this.grade) {
      case "A":
        this.element.nativeElement.style.backgroundColor = "green";
        break;
      case "B":
          this.element.nativeElement.style.backgroundColor = "yellow";
          break;
      case "C":
        this.element.nativeElement.style.backgroundColor = "orange";
        break;
      case "D":
        this.element.nativeElement.style.backgroundColor = "red";
        break;
      default:
        break;
    }
   }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor);
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

}
