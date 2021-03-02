import { HomeComponent } from './content/home/home.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { BlogComponent } from './content/blog/blog.component';
import { AboutComponent } from './content/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'portfolio', component: PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
