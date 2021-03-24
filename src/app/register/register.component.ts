import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }


  onregister(form:NgForm)
  {
    console.log(form.value);
    this.userservice.register(form.value).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }
}
