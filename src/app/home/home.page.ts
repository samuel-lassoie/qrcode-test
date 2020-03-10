import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private users = [
    {firstname: 'Samuel', lastname: 'Lassoie'},
    {firstname: 'Roger', lastname: 'Lassoie'},
    {firstname: 'Jeremy', lastname: 'Lassoie'},
    {firstname: 'Toto', lastname: 'Lassoie'},
    {firstname: 'Alex', lastname: 'TEst'},
  ];


  constructor() {}

}
