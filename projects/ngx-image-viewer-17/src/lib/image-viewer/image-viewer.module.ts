import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { ToggleFullscreenDirective } from './fullscreen.directive';
import { ImageViewerConfig } from './image-viewer-config.model';
@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ],
  exports: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ]
})
export class ImageViewerModule {
  static forRoot(config?: ImageViewerConfig): ModuleWithProviders<ImageViewerModule> {
    return {
      ngModule: ImageViewerModule,
      providers: [{provide: 'config', useValue: config}]
    };
  }
}
