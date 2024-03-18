import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from 'stencil-library/loader';

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements(window),
      multi: true
    },
  ],
})
export class ComponentLibraryModule { }
