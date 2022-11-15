import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  ListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  list : Report[] = [];

  constructor(
    private formBuilder: FormBuilder, private _router: Router) { 
      this.ListForm = this.formBuilder.group({});
      this.clickCreateEvent = false;  
  }

  ngOnInit(): void {
    this.get();
  }
  get(){
		const response = axios.get(`http://localhost:5432/api/reports/`, {
		}).then((response) => {
      this.list = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteRepo(id: String){
    console.log(id);
    if(!this.ListForm.invalid){
      const response = axios.delete(`http://localhost:5432/api/reports/${id}`)
      .then((response) => {
      this.get();
 
      }).catch((error) => {
        console.log(error);
      });
      /*return this.http.delete(`${this.API_URI}/${id}`);*/
    }
    
  }
  go2Update(id: String){
    this._router.navigate([`/report-form/${id}`])
  }

}
