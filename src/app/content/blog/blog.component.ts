import { BlogService } from './../services/blog.service';
import { Blog } from './../../../interface/global-interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs : Array<Blog>;
  constructor(
    private blogService : BlogService
  ) { }

  ngOnInit() {
    this.blogService.getAllBlogs()
    .pipe(map((blogArray) => {
      return blogArray.map(doc => {
        return <Blog>{
          id : doc.payload.doc.id,
          title : doc.payload.doc.data()["title"],
          author : doc.payload.doc.data()["author"],
          createdAt : doc.payload.doc.data()["createdAt"],
          description : doc.payload.doc.data()["description"],
          link : doc.payload.doc.data()["link"],
        }
      });
    }))
    .subscribe(result => this.blogs = result);
  }

}
