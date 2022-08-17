import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {

  public viewChange = true;
  public status = 'Login';
  public failedlogin = true;
  public showLogin = true;

aduser:string="admin";
adpass:string="pass";


  constructor(private router:Router) {


  }

  ngOnInit(): void {

  }
  myfrm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
  });

  savefrm() {
    console.log(this.myfrm.value)
  }

  cancel() {
    this.myfrm.reset();
  }

  get username() {
    return this.myfrm.get('username');
  }

  get password() {
    return this.myfrm.get('password');
  }

  get role() {
    return this.myfrm.get('role');
  }

  login(){
    if(this.username?.invalid && this.password?.invalid)
    {
      alert ("Wrong Credentials");
      this.failedlogin = ! this.failedlogin;
    } else if(this.username?.value === this.aduser && this.password?.value === this.adpass) {
      alert("WELCOME");
    
      this.viewChange = ! this.viewChange;
      this.status = this.viewChange ? 'Login' : 'Signed in';
      this.showLogin=false;
      this.router.navigateByUrl('/manager-flow');
    }
  }

}



