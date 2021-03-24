import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-create-profile',
  templateUrl: './developer-create-profile.component.html',
  styleUrls: ['./developer-create-profile.component.css']
})
export class DeveloperCreateProfileComponent implements OnInit {

  constructor() { }

  showLinks:boolean=false;
  ngOnInit(): void {
  }

  displayLinks(){

    this.showLinks = !this.showLinks;
  }
}
