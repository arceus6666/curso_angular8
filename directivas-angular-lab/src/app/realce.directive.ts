import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRealce]'
})
export class RealceDirective {

  @Input('appRealce') colorSet: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.realce('yellow');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.realce(null);
  }

  private realce(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
