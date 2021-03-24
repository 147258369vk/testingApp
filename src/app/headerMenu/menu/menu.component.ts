import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userservice:UserService) { }

  showuserNavbar=false;

  ngOnInit(): void {

    if(this.userservice.UserLoggedIn())
    {
      this.showuserNavbar=true;
    }

  }

}
