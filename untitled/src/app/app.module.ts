import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./providers/auth.guard";
import { MapComponent } from './components/map/map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {IssueFormComponent} from "./components/issue-form/issue-form.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenuModule} from "primeng/menu";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./providers/auth.interceptor";
import {RegisterService} from "./services/register.service";
import {MarkersService} from "./services/markers.service";
import { AdminStartPageComponent } from './components/admin-start-page/admin-start-page.component';
import {TableModule} from "primeng/table";
import { ConfirmDeletionPopupComponent } from './components/confirm-deletion-popup/confirm-deletion-popup.component';
import { AdminEditReportComponent } from './components/admin-edit-report/admin-edit-report.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SignUpFormComponent,
    MapComponent,
    IssueFormComponent,
    NavbarComponent,
    UserDetailsComponent,
    StartPageComponent,
    AdminStartPageComponent,
    ConfirmDeletionPopupComponent,
    AdminEditReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    DropdownModule,
    CalendarModule,
    DialogModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    MenubarModule,
    MenuModule,
    StepsModule,
    ToastModule,
    HttpClientModule,
    TableModule

  ],
  providers: [AuthGuard, DialogService, RegisterService, MarkersService, AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
  ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
