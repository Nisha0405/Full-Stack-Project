import { Component, OnInit } from '@angular/core';
import { AngularService } from '../services/angular.service';
// import { UserModel } from './user-data.model';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  taskDetails = null as any;
  UserValue = {
    'task_id':"",
    'task_name':"",
    'task_status' :"",
    'start_time' :"",
    'end_time' :"",
    'created_date' :"",
    'approval_status' :"",
    'assigned_manager' :"",
    'task_description' :""
  }
  
 searchText:any;

  constructor(private api: AngularService) { 
    this.gettaskDetails();
  }

  ngOnInit(): void {

  }


  register(registerForm: NgForm) {
    this.api.registeruser(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.gettaskDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  gettaskDetails() {
    this.api.getuser().subscribe(
      (resp) => {
        console.log(resp);
        this.taskDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteuser(item: any) {
    this.api.deleteusers(item.task_id).subscribe(
      (resp) => {
        console.log(resp);
        this.gettaskDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(item: any){
    this.UserValue = item;
  }

  updateuser(){
    this.api.updateusers(this.UserValue.task_id,this.UserValue).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

  }
