import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-edit-profile',
  templateUrl: './developer-edit-profile.component.html',
  styleUrls: ['./developer-edit-profile.component.css']
})
export class DeveloperEditProfileComponent implements OnInit {

  showLinks:boolean=false;
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
  }

  displayLinks(){

    this.showLinks = !this.showLinks;
  }

  back()
  {
    this.router.navigateByUrl('/dashboard');
  }

}
