import { PortfolioService } from './../services/portfolio.service';
import { IMyPortfolioWork } from './../../../interface/global-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public myPortfolioWork: IMyPortfolioWork[] = [];
  constructor(private portfolioService : PortfolioService) { }

  ngOnInit() {
    this.getAllPortfolioData();
  }

  public getAllPortfolioData(){
    this.portfolioService.getAllPortfolios().subscribe((response : IMyPortfolioWork[])=> {
     this.myPortfolioWork = response;
    });
  }

}
