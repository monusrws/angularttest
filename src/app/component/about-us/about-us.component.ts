import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
   siteurl = environment.PUBLIC_BASE_URL;
   aboutPost?:any[];
   aboutBannerImage ? : string;
   aboutTitle ? : string;
   aboutContent ? : string;
   aboutCoreTeamHeading ? : string;
  constructor(private apiService: ApiService, private titleService : Title,
    private metaTagService : Meta, private canonicalService : CanonicalService,
    private router : Router) { }
  metaDescription = 'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.';
  ngOnInit(): void {
    
    this.titleService.setTitle("About - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content: this.metaDescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'About - Swastik Production' },
      { name: 'og:description', content: this.metaDescription },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metaDescription },
      { name: 'twitter:title', content: 'About - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

    this.apiService.getAboutPageContent().subscribe({
      next : data => {
       this.aboutPost = JSON.parse(data).post;
       this.aboutBannerImage = JSON.parse(data).banner_image;
        this.aboutTitle = JSON.parse(data).title;
        this.aboutContent = JSON.parse(data).about_content;
        this.aboutCoreTeamHeading = JSON.parse(data).core_team_heading;

      },
      error: err => {
        this.aboutPost = JSON.parse(err.error).message;
      }
    })
  }

}
