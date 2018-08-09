import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

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
