import { IMyPortfolioWork } from './../../../interface/global-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public myPortfolioWork: IMyPortfolioWork[] = [
    {
      imageUrl : 'https://source.unsplash.com/random',
      workTitle: 'NEW PROJECT 1',
      workShortDesc: 'asdpjw osijfo iwj pwfeijf pwei jfwpe fpwmf .',
      languageStack : ['html','css','javascript']
    },
    {
      imageUrl : 'https://source.unsplash.com/random',
      workTitle: 'NEW PROJECT 1',
      workShortDesc: 'asdpjw osijfo iwj pwfeijf pwei jfwpe fpwmf .',
      languageStack : ['html','css','javascript']
    },
    {
      imageUrl : 'https://source.unsplash.com/random',
      workTitle: 'NEW PROJECT 1',
      workShortDesc: 'asdpjw osijfo iwj pwfeijf pwei jfwpe fpwmf .',
      languageStack : ['html','css','javascript']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
