import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ModalComponent } from './components/modal/modal.component';

const components = [ButtonComponent];
@NgModule({
  declarations: [ClickOutsideDirective, ...components, ModalComponent],
  imports: [CommonModule],
  exports: [ClickOutsideDirective, ...components]
})
export class SharedModule {}
