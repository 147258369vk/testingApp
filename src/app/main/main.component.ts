import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public userservice:UserService) { }

  showbutton=true;

  ngOnInit(): void {



    if(this.userservice.UserLoggedIn())
    {
      this.showbutton=false;
    }

  }

}
