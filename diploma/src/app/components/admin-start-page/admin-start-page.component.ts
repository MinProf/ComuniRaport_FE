import {Component, OnInit} from '@angular/core';
import {Raport} from "../../models/raport.model";
import {MarkersService} from "../../services/markers.service";
import {StatusEnum} from "../../models/enum/status.enum";

@Component({
  selector: 'app-admin-start-page',
  templateUrl: './admin-start-page.component.html',
  styleUrls: ['./admin-start-page.component.css']
})
export class AdminStartPageComponent implements OnInit {
  raports: Raport[] = []
  currentDeleteId!: number
  displayDeletePopup: boolean = false
  selectedRaportStatus!: StatusEnum;
  selectedRaport!: Raport;
  displayEditPopup: boolean = false;

  constructor(private markerService: MarkersService) {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.markerService.fetchReports().subscribe((markers: Raport[]) => {
      this.raports = markers;
    });
  }
  editSelectedRaport(raport: Raport){
    this.displayEditPopup = true;
    this.selectedRaport = raport;
  }
  onStatusChange(newStatus: StatusEnum) {
    this.selectedRaportStatus = newStatus;
  }
  onEditSaveButtonClick(event: Raport) {
    this.selectedRaport = event;
    this.raports.filter(
      (raport) => raport.id == this.selectedRaport.id)[0].status = this.selectedRaportStatus;
    this.displayEditPopup = false;
  }
  closingEditPopup() {
    this.displayEditPopup = false;
  }
  showDeleteModalDialog(deleteId: number) {
    this.displayDeletePopup = true;
    this.currentDeleteId = deleteId;
  }
  onDeletePopupClosed(deletion: boolean) {
    this.displayDeletePopup = false;
    if (deletion) {
      this.markerService.deleteRaport({id: this.currentDeleteId})
        .subscribe(() => {
          this.raports.filter(
            (raport) => raport.id != this.currentDeleteId)
        });
    }
  }
}
