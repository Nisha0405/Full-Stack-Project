import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public viewChange = true;
  public status = 'Login';
  public failedlogin = true;
  public showLogin = true;
user:string="user";
pass:string="pass";

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

  login(){
    if(this.username?.invalid && this.password?.invalid)
    {
      alert ("Wrong Credentials");
      this.failedlogin = ! this.failedlogin;
    } else if(this.username?.value === this.user && this.password?.value === this.pass) {
      alert("WELCOME");
    
      this.viewChange = ! this.viewChange;
      this.status = this.viewChange ? 'Login' : 'Signed in';
      this.showLogin=false;
      this.router.navigateByUrl('/dashboard');
    }
  }

}







