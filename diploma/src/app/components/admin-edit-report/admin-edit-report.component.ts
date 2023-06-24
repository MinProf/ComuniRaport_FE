import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Raport} from "../../models/raport.model";
import {StatusEnum} from "../../models/enum/status.enum";

@Component({
  selector: 'app-admin-edit-report',
  templateUrl: './admin-edit-report.component.html',
  styleUrls: ['./admin-edit-report.component.css']
})
export class AdminEditReportComponent {
  @Input() displayEditPopup!: boolean;
  @Input() raport!: Raport;
  @Input() raportStatus!: StatusEnum;
  statusOptions = [
    { label: 'raportată', value: StatusEnum.PENDING },
    { label: 'în progres de rezolvare', value: StatusEnum.IN_PROGRESS },
    { label: 'rezolvată', value: StatusEnum.RESOLVED }
  ];
  @Output() statusChange: EventEmitter<StatusEnum> = new EventEmitter<StatusEnum>();
  @Output() editButtonClicked: EventEmitter<Raport> =
    new EventEmitter<Raport>();
  @Output() closeEditPopupClicked: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  emitClickEvent() {
    // this.editButtonClicked.emit(this.raport);
  this.editButtonClicked.emit(this.raport);
    this.onCloseEditPopup(true);
  }

  onStatusChange(newStatus: StatusEnum) {
    this.statusChange.emit(newStatus);

  }
  onCloseEditPopup(onClosing: boolean) {
    this.closeEditPopupClicked.emit(onClosing);
    this.displayEditPopup = false;
  }

  protected readonly StatusEnum = StatusEnum;
}
