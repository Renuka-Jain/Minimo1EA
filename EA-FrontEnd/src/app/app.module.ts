import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventScreenComponent } from './components/event-screen/event-screen.component';
import { UserListComponent } from './components/UserList/userlist.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportNewComponent } from './components/report-new/report-new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClickOutsideDirective,
    HomeComponent,
    CreateEventComponent,
    EventScreenComponent,
    UserListComponent,
    UsersUpdateComponent,
    ReportFormComponent,
    ReportListComponent,
    ReportNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
