import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[hiveClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output()
  public onClickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const clickedOutside = !this._elementRef.nativeElement.contains(targetElement);
    if (clickedOutside) {
      this.onClickOutside.emit(event);
    }
  }
}
