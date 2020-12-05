import { menu } from './../../interface/global-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  constructor() { }
  @Input() activeComponent: menu = 'home';
  ngOnInit() {
  }

}
