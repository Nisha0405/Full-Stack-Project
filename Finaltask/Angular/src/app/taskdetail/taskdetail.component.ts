import { Component, OnInit } from '@angular/core';
import { AngularService } from '../services/angular.service';
import { UserDataComponent } from '../user-data/user-data.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  providers: [UserDataComponent],
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  tasklist: any;
  
  public item:any;
  public searchTerm = '';

  constructor(public comp:UserDataComponent,private api: AngularService) { }

  ngOnInit(): void {

    this.viewTasklist();

  }

  viewTasklist() {
    this.api.Task().subscribe((task)=>{
      this.item = task;
      console.log(this.item)
  
    })
  }


}
