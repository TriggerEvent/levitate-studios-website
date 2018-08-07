import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  character = 0;
  curBoxValue = 0;

  prevIcon = false;
  nextIcon = true;

  boxes = [];
  boxValues = [];

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

    for(let i = 0; i < this.boxes.length; i++)
      this.boxValues[i] = i;
  }
  
  changeBoxValues(curBoxValue)
  {
    this.prevIcon = false;
    this.character = this.boxValues[curBoxValue];
    this.curBoxValue = curBoxValue;

    for(let i = 0; i < this.boxes.length; i++)
    {
      if(this.boxValues[i] == curBoxValue)
      {
        this.boxes[this.boxValues[curBoxValue]] = this.activeSrc[this.boxValues[curBoxValue]];
      }
      else
      {
        this.boxes[this.boxValues[i]] = this.deactiveSrc[this.boxValues[i]];
      }
    }
  }

  next()
  {
    if(this.boxValues[0] >= 0)
    {
      for(let i = 0; i < this.boxValues.length; i++)
      this.boxValues[i] = this.boxValues[i] - 1;

      this.refreshIcons();
    }
    else
    {
      this.nextIcon = false;
      this.prevIcon = true;
    }

  }

  prev()
  {
    if(this.boxValues[this.boxValues.length-1] < this.boxValues.length-1)
    {
      for(let i = 0; i < this.boxValues.length; i++)
        this.boxValues[i] = this.boxValues[i] + 1;

      this.refreshIcons();
    }
    else
    {
      this.nextIcon = true;
      this.prevIcon = false;
    }
  }

  refreshIcons()
  {

    for(let i = 0; i < this.boxes.length; i++)
    {
      if(this.boxValues[i] == this.boxValues[this.curBoxValue])
      {
        this.boxes[this.character] = this.activeSrc[i];
      }
      else
      {
        this.boxes[this.boxValues[i]] = this.deactiveSrc[i];
      }
    }
  }

}