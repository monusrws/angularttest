import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  latestNewsBannerImage ?: string;
  latestNewsTitle ?: string;
  latestNewsPost ?: any[];
  instagramFeed ?:string;
  newsUrl ? : string;
  constructor(private apiService : ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
  metaDescription = 'Latest News - Swastik Production'; 
  ngOnInit(): void {
    this.titleService.setTitle("Latest News - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:this.metaDescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Latest News - Swastik Production' },
      { name: 'og:description', content: this.metaDescription},
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metaDescription },
      { name: 'twitter:title', content: 'Latest News - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

   
    this.apiService.getLatestNewsPageContent().subscribe({
      next : data => {
      
       this.latestNewsPost = JSON.parse(data).post;
       
       this.latestNewsBannerImage = JSON.parse(data).banner_image;
        this.latestNewsTitle = JSON.parse(data).title;
        this.instagramFeed = JSON.parse(data).instagram_feed;
        
       

      },
      error: err => {
        this.latestNewsPost = JSON.parse(err.error).message;
      }
    });
  }

}
