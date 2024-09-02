import { Directive, HostListener, OnChanges, Input, ElementRef } from '@angular/core';
import * as screenfull from 'screenfull';



@Directive({
    selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

    @Input('ngxToggleFullscreen')
    isFullscreen: boolean=false;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if (this.isFullscreen && screenfull.default.isEnabled) {
            screenfull.default.request(this.el.nativeElement);
        } else if (screenfull.default.isEnabled) {
            screenfull.default.exit();
        }
    }

}
