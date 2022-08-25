import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-syndication',
  templateUrl: './syndication.component.html',
  styleUrls: ['./syndication.component.css']
})
export class SyndicationComponent implements OnInit {
  siteUrl = environment.PUBLIC_BASE_URL;
  syndicationPost?: any[];
  syndicationBannerImage?: string;
  syndicationTitle? : string;
  syndicationContent ?: string;
  constructor(private apiService:ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
  metaDescription = 'Having a reputed brand image in media markets of various countries, Swastik Productions is adept in dealing with global content syndication/licensing. Our subsidiary, One Life Studios, has been exposing groundbreaking content via an interconnected chain of partners across the world.';
  ngOnInit(): void {
    this.titleService.setTitle("Syndication - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content: this.metaDescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Syndication - Swastik Production' },
      { name: 'og:description', content: this.metaDescription },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metaDescription },
      { name: 'twitter:title', content: 'Syndication - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

    this.apiService.getSyndicationPageContent().subscribe({
      next: data => {
        console.log(JSON.parse(data));
        this.syndicationPost = JSON.parse(data).post;
        this.syndicationBannerImage = JSON.parse(data).banner_image;
        this.syndicationTitle = JSON.parse(data).title;
        this.syndicationContent = JSON.parse(data).syndication_content;
        

      },
      error: err => {
        this.syndicationPost = JSON.parse(err.error).message;
      }
    });
  }

}
