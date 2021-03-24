import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router:Router,
    public userservice:UserService
  ) { }

    userData:any =[];
  id:any


  ngOnInit(): void {
    this.id=this.userservice.getUserId();
   this.userservice.getselectedUser(this.id).subscribe((res)=>{

     this.userData=res;
     console.log(this.userData);


   })

  }

  editprofile()
  {
    this.router.navigateByUrl('/edit-profile');
  }

  addEdu()
  {
    this.router.navigateByUrl('/add-education');
  }

  addExp(){
    this.router.navigateByUrl('/add-experience');
  }
}
