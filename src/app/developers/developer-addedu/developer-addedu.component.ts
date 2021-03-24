import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-addedu',
  templateUrl: './developer-addedu.component.html',
  styleUrls: ['./developer-addedu.component.css']
})
export class DeveloperAddeduComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  checked:boolean=false;

  ngOnInit(): void {
  }

  checkList()
  {
    this.checked=!this.checked;
  }

  back()
  {
    this.router.navigateByUrl('/dashboard');
  }
}


