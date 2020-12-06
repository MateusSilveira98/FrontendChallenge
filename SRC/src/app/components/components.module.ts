import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AlertNotificationComponent } from './alert-notification/alert-notification.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AlertNotificationComponent,
    ModalComponent
  ],
  exports: [
    AlertNotificationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
