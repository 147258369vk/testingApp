import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.userservice.removeToken();
    this.router.navigateByUrl('/login');
  }


}
