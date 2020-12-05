import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './content/about/about.component';
import { BlogComponent } from './content/blog/blog.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HomeComponent } from './content/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
  
    FooterComponent,
  
    AboutComponent,
  
    BlogComponent,
  
    PortfolioComponent,
  
    ContentContainerComponent,
  
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
