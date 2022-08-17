import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AngularService {
  getDataById(id: any) {
    throw new Error('Method not implemented.');
  }

  API = 'http://localhost:8000';
api_url= 'http://localhost:8000/task/';

  constructor(private http: HttpClient) { }

  Task(){
    return this.http.get(this.api_url);
  }


  public registeruser(taskData: any) {
    return this.http.post(this.API + '/task/', taskData);
  }

  public getuser() {
    return this.http.get(this.API + '/task/');
  }

  public deleteusers(task_id: any) {
    return this.http.delete(this.API + '/task/' + task_id+'/');
  }

public updateusers(task_id: any,item: any) {
    return this.http.put(this.API + '/task/' + task_id+"/",item );
  }

  getTask() {
    return this.http.get(this.api_url);
  }

  getTaskById(task_id:number) {
    return this.http.get(this.API + ('/task/') + task_id +'/');
  }

}