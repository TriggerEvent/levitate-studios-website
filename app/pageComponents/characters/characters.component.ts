import { Component, OnChanges, OnInit } from '@angular/core';
import { PagesService } from '../../pageComponents/pages.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  character = 0;
  curBoxValue = 0;

  prevIcon = false;
  nextIcon = true;

  boxes = [];
  maxBox = 5;

  activeSrc = [];
  deactiveSrc = [];

  activeJett = "jett1.png";
  deactiveJett = "jett-deactive.png";

  activeVixen = "vixen.png";
  deactiveVixen = "vixen-deactive.png";

  activeNiles = "niles.png";
  deactiveNiles = "niles-deactive.png";

  activeSugar = "sugar.png";
  deactiveSugar = "sugar-deactive.png";

  activePurscilla = "purscilla.png";
  deactivePurscilla = "purscilla-deactive.png";

  activeReggie = "reggie.png";
  deactiveReggie = "reggie-deactive.png";
  
  ngOnInit() 
  {
    this.character = this.pagesService.getCharacter();

    this.activeSrc[0] = "jett1.png";
    this.activeSrc[1] = "vixen.png";
    this.activeSrc[2] = "niles.png";
    this.activeSrc[3] = "sugar.png";
    this.activeSrc[4] = "purscilla.png";
    this.activeSrc[5] = "reggie.png";

    this.deactiveSrc[0] = "jett-deactive.png";
    this.deactiveSrc[1] = "vixen-deactive.png";
    this.deactiveSrc[2] = "niles-deactive.png";
    this.deactiveSrc[3] = "sugar-deactive.png";
    this.deactiveSrc[4] = "purscilla-deactive.png";
    this.deactiveSrc[5] = "reggie-deactive.png";

    this.boxes[0] = this.activeJett;
    this.boxes[1] = this.deactiveVixen;
    this.boxes[2] = this.deactiveNiles;
    this.boxes[3] = this.deactiveSugar;
    this.boxes[4] = this.deactivePurscilla;
    this.boxes[5] = this.deactiveReggie;

    this.changeBoxActive(this.character);
  }
  
  changeBoxActive(curBoxValue)
  {
    this.character = curBoxValue;

    for(let i = 0; i < this.boxes.length; i++)
    {
      if(i == curBoxValue)
      {
        this.boxes[curBoxValue] = this.activeSrc[curBoxValue];
      }
      else
      {
        this.boxes[i] = this.deactiveSrc[i];
      }
    }
  }

  back()
  {
    this.maxBox--;
  }

  next()
  {
    this.maxBox++;
  }
}