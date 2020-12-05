import { menu } from './../interface/global-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  public setActiveComponent:menu = 'home';
  public getActiveComponent(activeComponent){
    this.setActiveComponent = activeComponent;
  }
}
