import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalConfig } from 'src/app/models/interfaces/ModalConfig.interface';

enum ModalActionButtonType {
  'cancel' = 1,
  'confirm' = 2
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  /**
   * used to get buttons and Title names and verify if should show the modal
   */
  @Input() config: ModalConfig;

  /**
   * Event to emit to close modal
   */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter();

  /**
   * Event to emit action button click
   */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onActionButtonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  /**
   * emit that this componet is ready to close
   */
  close(): void {
    this.onClose.emit(!this.config.show);
  }

  /**
   * emit that some action button has clicked
   */
  actionButtonClick(type: ModalActionButtonType): void {
    this.onActionButtonClick.emit(type);
  }
}
