import { Component, HostListener, OnInit } from '@angular/core';
import { PagesService } from '../../pageComponents/pages.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private pagesService: PagesService, private router: Router) { }


  public innerWidth: any;

  changeCharacter(num)
  {
    this.pagesService.setCharacter(num);
    this.router.navigateByUrl('/turbosquad');
  }

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
