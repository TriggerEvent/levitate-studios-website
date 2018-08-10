import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])

  ngOnInit() 
  {
    this.innerWidth = window.innerWidth;
  }

  onResize(event) 
  {
    this.innerWidth = window.innerWidth;
  }
}
