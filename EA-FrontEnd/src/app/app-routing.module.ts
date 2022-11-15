import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventScreenComponent } from './components/event-screen/event-screen.component';
import { UserListComponent } from './components/UserList/userlist.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportNewComponent } from './components/report-new/report-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'event-screen', component: EventScreenComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'user-update/:_id', component: UsersUpdateComponent },
  { path: 'reportlist', component: ReportListComponent },
  { path: 'report-form/:_id', component: ReportFormComponent },
  { path: 'reportform/', component: ReportFormComponent },
  { path: 'reportnew/', component: ReportNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
