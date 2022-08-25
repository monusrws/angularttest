import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-vfx',
  templateUrl: './vfx.component.html',
  styleUrls: ['./vfx.component.css']
})
export class VfxComponent implements OnInit {
  siteUrl = environment.PUBLIC_BASE_URL;
  vfxPost ?: any [];
  vfxBannerImage ?: string;
  vfxTitle ?: string;
  vfxContent ?: string;

  constructor(private apiService:ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
    metadescription = 'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.';
  ngOnInit(): void {
    this.titleService.setTitle("VFX - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:this.metadescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'VFX - Swastik Production' },
      { name: 'og:description', content: this.metadescription },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metadescription },
      { name: 'twitter:title', content: 'VFX - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

    this.apiService.getVfxPageContent().subscribe({
      next: data => {
        this.vfxPost = JSON.parse(data).post;
        this.vfxBannerImage = JSON.parse(data).banner_image;
        this.vfxTitle = JSON.parse(data).title;
        this.vfxContent = JSON.parse(data).vfx_content;
        

      },
      error: err => {
        this.vfxPost = JSON.parse(err.error).message;
      }
    });
  }

}
