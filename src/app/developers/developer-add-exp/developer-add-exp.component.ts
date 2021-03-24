import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-add-exp',
  templateUrl: './developer-add-exp.component.html',
  styleUrls: ['./developer-add-exp.component.css']
})
export class DeveloperAddExpComponent implements OnInit {

  checked:boolean=false;
  constructor(
    private router:Router
  ){}

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
