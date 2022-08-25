import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.css']
})
export class StudiosComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  constructor(private apiService: ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
  studiosBannerImage?: string;
  studiosTitle?: string;
  studiosContent?: string;
  studioPost ? : any[];
  metaDescription = 'Located in Umbergaon, Gujarat, Swastik Bhoomi is the proud owner of a 25-acre studio plot. Apart from 17 well-resourced shoot floors, we have a range of accommodation options for the entire hierarchy of a production team.';
  ngOnInit(): void {
    this.titleService.setTitle("Studios - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:this.metaDescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Studios - Swastik Production' },
      { name: 'og:description', content: this.metaDescription },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metaDescription },
      { name: 'twitter:title', content: 'Studios - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

    this.apiService.getStudiosPageContent().subscribe({
      next : data => {
        console.log(JSON.parse(data));
       this.studioPost = JSON.parse(data).post;
       
       this.studiosBannerImage = JSON.parse(data).banner_image;
        this.studiosTitle = JSON.parse(data).title;
        this.studiosContent = JSON.parse(data).studios_content;
       

      },
      error: err => {
        this.studioPost = JSON.parse(err.error).message;
      }
    });
  }

}
