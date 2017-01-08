import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private el: ElementRef) { 
    
  }

  @Input('appBackground') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.background(this.backgroundColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background(null);
  }

  private background(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}