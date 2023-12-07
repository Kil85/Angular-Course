import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {}

  showClassName = 'show';

  @HostListener('click') onClick(event: Event) {
    const element = this.elRef.nativeElement;
    if (element.classList.contains(this.showClassName)) {
      this.render.removeClass(element, this.showClassName);
    } else {
      this.render.addClass(element, this.showClassName);
    }
  }
}
