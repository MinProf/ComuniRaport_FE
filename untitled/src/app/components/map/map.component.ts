import {Component, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../services/map.service";
import {Raport} from "../../models/raport.model";
import {DialogService} from "primeng/dynamicdialog";
import {IssueFormComponent} from "../issue-form/issue-form.component";
import {IssueCategoryEnum} from "../../models/enum/issue-category.enum";
import {StatusEnum} from "../../models/enum/status.enum";
import {MessageService} from "primeng/api";
import {MarkersService} from "../../services/markers.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  constructor(private googleMapsService: MapService, private dialogService: DialogService, private markerService: MarkersService) {}

  map!: google.maps.Map;
  locationMarkers: { marker: google.maps.Marker, location: any, issueCategory: string, status: string }[] = [];
  currentInfoWindow: google.maps.InfoWindow | null = null;

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const loader = this.googleMapsService.getNewLoader();
    loader.load().then(() => {
      this.map = this.googleMapsService.initializeMapOptions(this.map);
      this.placeMarkers();
      this.setupClickListener();
    });
  }

  placeMarkers() {
    this.locationMarkers.forEach(({ marker }) => {
      marker.setMap(null);
    });

    this.locationMarkers = [];

    this.markerService.fetchReports().subscribe(
      (reports: Raport[]) => {
        reports.forEach(report => {
          const marker = this.createLocationMarker(report.location);
          this.locationMarkers.push({
            marker,
            location: report.location,
            issueCategory: report.issueCategory as IssueCategoryEnum,
            status: report.status as StatusEnum,
          });
          marker.setMap(this.map);
          marker.addListener('click', () => this.showInfoPopover(report));
        });
      },
      (error) => {
        console.error('Error fetching reports:', error);
      }
    );
  }

  getInfoWindowContent(location: any, issueCategory: string, status: string) {
    return `<div style="font-weight: 700; text-align: center; font-family: 'Isidora Sans', serif">
                    ${issueCategory}
                <div class="mt-2" style="font-weight: 800">${status}</div>
            </div>`;
  }

  showInfoPopover(report: Raport) {
    if (this.currentInfoWindow) {
      this.currentInfoWindow.close();
    }
    const infoWindow = new google.maps.InfoWindow({
      content: this.getInfoWindowContent(report, report.issueCategory as IssueCategoryEnum, report.status as StatusEnum),
      position: report.location,
      pixelOffset: new google.maps.Size(0, -40),
    });
    infoWindow.setContent(`
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div style="font-weight: 500">
        ${this.getInfoWindowContent(report, report.issueCategory as IssueCategoryEnum, report.status as StatusEnum)}
      </div>
    </div>
  `);
    infoWindow.open(this.map);

    this.currentInfoWindow = infoWindow;
  }

  createLocationMarker(location: any) {
    return new google.maps.Marker({
      position: location,
      clickable: true,
    });
  }
  setupClickListener() {
    google.maps.event.addListener(this.map, 'click', (event: any) => {
      this.onMapClick(event);
    });
  }

  onMapClick(event: any) {
    const clickedLatLng = event.latLng;
    const clickedLocation = {lat: clickedLatLng.lat(), lng: clickedLatLng.lng(), title: 'Clicked Location'};

    const raportData: Partial<Raport> = {
      location: clickedLocation
    };
    const ref = this.dialogService.open(IssueFormComponent, {
      data: raportData,
      width: '35vw',
      header: 'Semnalează o problemă',
      keepInViewport: true,
      closable: true,
      closeOnEscape: true,
      contentStyle: {"background-color": "var(--primary-bg-color-green)", "color": "var(--primary-text-color-white)"},
    });

    ref.onClose.subscribe((issueData: any) => {
      if (issueData?.issueCategory && issueData?.status) {
        const newRaport = {
          lat: clickedLocation.lat,
          lng: clickedLocation.lng,
          issueCategory: issueData.issueCategory,
          status: issueData.status,
          description: issueData.description,
          date: issueData.date
        };
        this.markerService.addReport(newRaport).subscribe(() => {
          this.placeMarkers();
          this.showInfoPopover(newRaport);
        });
      }
    });
  }
}
