import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-deletion-popup',
  templateUrl: './confirm-deletion-popup.component.html',
  styleUrls: ['./confirm-deletion-popup.component.css']
})
export class ConfirmDeletionPopupComponent {
  @Input() deleteModalPopup: boolean = false;

  @Output() deletePopupClosed: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  closePopup(withDeletion: boolean) {
    this.deletePopupClosed.emit(withDeletion);
  }
}

