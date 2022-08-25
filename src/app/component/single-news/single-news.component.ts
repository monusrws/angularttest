import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  newsUrl ?:string;
  singleNewsPost ?: any[];
  singleNewsRelatedPost ?: any[];
  singleNewsInnerlogo ? : string;
  singleNewsTitle ? : string;
  singleNewsDate ? : string;
  singleNewsImageUrl ? : string;
  singleNewsContent ? : string;
  constructor(private apiService : ApiService,private activateRoute : ActivatedRoute,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    

    
    this.canonicalService.setCanonicalURL();


    this.newsUrl = this.activateRoute.snapshot.params['slug'];
    this.apiService.getSingleNewsPageContent(this.newsUrl).subscribe({
      next : data => {
       
        this.singleNewsRelatedPost = JSON.parse(data).related_news;
        this.singleNewsInnerlogo = JSON.parse(data).post[0].inner_logo;
        this.singleNewsTitle = JSON.parse(data).post[0].title;
        this.titleService.setTitle(this.singleNewsTitle+" - Swastik Production");  
        this.singleNewsDate = JSON.parse(data).post[0].date;
        this.singleNewsImageUrl = JSON.parse(data).post[0].imageurl;
        this.singleNewsContent = JSON.parse(data).post[0].content;
        
        
      },
      error: err => {
        this.singleNewsPost = JSON.parse(err.error).message;
      }
    });
    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.'},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Home - Swastik Production' },
      { name: 'og:description', content: 'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.' },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.' },
      { name: 'twitter:title', content: 'Home - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
  }

}
