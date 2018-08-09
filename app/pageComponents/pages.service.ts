import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagesService {

    constructor() { }

    curCharacter = 0;

    setCharacter(num)
    {
        this.curCharacter = num;
    }

    getCharacter()
    {
        return this.curCharacter;
    }
}