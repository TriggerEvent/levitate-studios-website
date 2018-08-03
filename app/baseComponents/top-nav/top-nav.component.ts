
import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})

export class TopNavComponent implements OnInit {
  contact = false;
  oldUrl:any;

  constructor
  ( 
    private location: Location, 
    private router : Router 
  ){}

  hideContact(val: boolean) {
    console.log("worked?");
    this.contact = val;
    if(this.oldUrl == undefined)
    {
      this.location.go("");
    }
    else
    {
      this.location.go(this.oldUrl);
    }
  }

  openContact() {
    this.oldUrl = this.router.url;
    this.location.go("contact");
    this.contact = true;
  }

  ngOnInit(){
    console.log(this.location.path());
    if(this.location.path() == "/contact"){
      this.contact = true;
    }
  }

}
