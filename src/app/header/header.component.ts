import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public toggleHamActive:boolean = false;
  @Output() menuClickEventOutput= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public onMenuItemClick(activeComponent:string){
    this.menuClickEventOutput.emit(activeComponent);
  }

  public onMenuToggleClick(){
    this.toggleHamActive = !this.toggleHamActive;
  }
}
