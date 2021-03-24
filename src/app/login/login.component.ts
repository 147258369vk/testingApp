import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice:UserService,private router:Router) { }

  userData :any= [];
  ngOnInit(): void {
  }


  onlogin(form:NgForm)
  {
    this.userservice.login(form.value).subscribe((res)=>{
      this.userData = res;

      this.userservice.setToken(this.userData.token);
      this.userservice.setUserId(this.userData.data._id);
      this.router.navigateByUrl('/dashboard');

    })
  }

}
