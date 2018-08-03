import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {trigger,state,style,animate,transition} from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contactState', [
      state('blue', style({
        backgroundColor: '#1493e4',
        transform: 'scale(1)'
      })),
      state('grey',   style({
        backgroundColor: '#7b7b7b',
        transform: 'scale(1)'
      })),
      transition('blue => grey', animate('100ms ease-out')),
      transition('grey => blue', animate('100ms ease-in'))
    ])
  ]
})

export class ContactComponent {
  @Output() hideContact = new EventEmitter<boolean>();

  questions = true;

  question = [false, false, false, false, false];

  state = 'blue'

  constructor
  ( 
    private location: Location
  ){}

  exitContact()
  {
    this.hideContact.emit(false);
  }

  toggleQuestions(){
    this.questions = !this.questions;
    
    if(this.questions){
      this.state = 'blue';
    }else{
      this.state = 'grey';
    }
  }

  toggleQuestion(num){

    for(let i = 0; i < this.question.length; i++)
    {
      if(i != num){
        this.question[i] = false;
      }else{
        this.question[i] = !this.question[i];
      }
    }

  }
}
