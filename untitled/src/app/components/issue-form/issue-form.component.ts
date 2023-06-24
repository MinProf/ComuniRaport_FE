import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatusEnum} from "../../models/enum/status.enum";
import {IssueCategoryEnum} from "../../models/enum/issue-category.enum";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent {

  issueCategoryOptions: { label: string; value: string }[];
  statusOptions: { label: string; value: string }[];
  issueForm: FormGroup
  @Input() locations: any[] = [];
  @Output() issueFormSubmit = new EventEmitter<any>();


  constructor(private formBuilder: FormBuilder, private ref: DynamicDialogRef, private config: DynamicDialogConfig) {
    this.issueForm = this.formBuilder.group({
      issueCategory: ['', Validators.required],
      status: [{value: StatusEnum.PENDING, disabled: true}],
      date: [{value: new Date(), disabled: true}],
      description: ['', Validators.required],
      latitude: [{value: this.config.data.location?.lat, disabled: true}],
      longitude: [{value: this.config.data.location?.lng, disabled: true}],
    });

    this.issueCategoryOptions = Object.keys(IssueCategoryEnum).map(key => ({
      label: IssueCategoryEnum[key as keyof typeof IssueCategoryEnum],
      value: key
    }));

    this.statusOptions = Object.keys(StatusEnum).map(key => ({
      label: StatusEnum[key as keyof typeof StatusEnum],
      value: key
    }));
  }

  saveIssue() {
    if (this.issueForm.valid) {
      const issueData = this.issueForm.getRawValue();
      issueData.location = this.config.data.location;

      if (issueData.location) {

        this.ref.close(issueData);
      } else {
        console.error('Invalid location data');

      }
    }
  }
}
