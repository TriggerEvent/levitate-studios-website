import { Component } from '@angular/core';
import { PagesService } from '../../pageComponents/pages.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private pagesService: PagesService, private router: Router) { }


  changeCharacter(num)
  {
    this.pagesService.setCharacter(num);
    this.router.navigateByUrl('/turbosquad');
    console.log('changeCharacter');
  }
}
