import { Component, OnInit } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { AngularService } from '../services/angular.service';

@Component({
  providers: [UserDataComponent],
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public searchTerm = '';
  public taskById:any;
  public taskByIdCopy:any;
  public updatedTask:any;
  public task:any;

  constructor( public comp:UserDataComponent,
    private api:AngularService) { }

  ngOnInit(): void {
  }

   // function to get data by id to edit
   action(pk:number) {
    console.log(pk)
    this.api.getTaskById(pk).subscribe((response)=>{
      this.taskById = response;
      console.log(this.taskById)
      this.taskByIdCopy = {...response};
    })
  }
  
  onSubmit() {

    this.api.updateusers(this.taskById.task_id, this.taskById).subscribe((response)=>{
      this.updatedTask = response;
      console.log(this.updatedTask)
      window.alert("Task action taken successfully")
   })
    
  }

}
