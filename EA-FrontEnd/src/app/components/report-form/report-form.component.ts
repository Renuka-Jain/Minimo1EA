import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models/Report';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean; 
  userDataErr: boolean = false;
  date: Date;
  uponAge: boolean = false;
  samepass: boolean = false;

  repo:Report={
    _id:"",
    content:"",
	  mail:"",
    
	  date:new Date(),
	  accepted:false
  }

  constructor(private formBuilder: FormBuilder, private _router: Router, private activedRoute: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({});
    this.clickRegister = true;
    this.clickLogin = false;
    this.clickForgot = false;
    this.date = new Date();
  }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params);
    this.get(params._id);
    this.registerForm = this.formBuilder.group({
      content: ['', Validators.required],
      accepted: [false, Validators.required],
      owner: ['', [Validators.required, Validators.email]],
      date: [ String(this.repo.date.getFullYear() + '-' + this.repo.date.getMonth() + "-" + this.repo.date.getDate()), Validators.required],
    });
  }
  get(id:String){
		const response = axios.get(`http://localhost:5432/api/reports/${id}`, {
		}).then((response) => {
      console.log(response);
      this.repo=response.data;
		}).catch((error) => {
			console.log(error);
		});
    
	}

  updateUser() {
    axios.put(`http://localhost:5432/api/reports/`, {
      _id: this.repo._id,
			content: this.registerForm.value.content,
		  mail: this.registerForm.value.owner,
			accepted: this.registerForm.value.accepted,
			date: this.registerForm.value.date
		})
    .then((response) => {
      this._router.navigate(['/reportlist'])
    }).catch((error) => {
      console.log(error);
    });
    //return this.http.put(`${this.API_URI}/`, user);
  }

  onSubmit() {
    let date = new Date();
    let birthday = new Date(this.registerForm.value.dateBirth);
    this.submitted = true;
    if (birthday.getFullYear() === date.getFullYear() - 13) {
      if(birthday.getFullYear() === date.getFullYear() - 13 && birthday.getMonth() <= date.getMonth()) {
        if(birthday.getFullYear() === date.getFullYear() - 13 && birthday.getMonth() === date.getMonth() && birthday.getDate() <= date.getDate()) {
          this.uponAge = true;
        }
        else{
          this.uponAge = false;
        }
      }
      else{
        this.uponAge = false;
      }
    } else if (birthday.getFullYear() < date.getFullYear() - 13) {
      this.uponAge = true;
    }else {
      this.uponAge = false;
    } 
	if(this.registerForm.value.password === this.registerForm.value.repeatPass){
		this.samepass = true;
	}else{
		this.samepass = false;
	}
	if (this.registerForm.invalid || !this.uponAge || !this.samepass) {
		return;
	}
	}

}
