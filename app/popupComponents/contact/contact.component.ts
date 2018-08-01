import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  @Output() hideContact = new EventEmitter<boolean>();

  constructor
  ( 
    private location: Location
  ){}

  exitContact(){
    this.hideContact.emit(false);
  }
}
