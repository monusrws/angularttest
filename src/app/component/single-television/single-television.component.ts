import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-single-television',
  templateUrl: './single-television.component.html',
  styleUrls: ['./single-television.component.css']
})
export class SingleTelevisionComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  showShare = false;
  televisionUrl ?:string;
  television_relatedpost ?:any[];
  singleTelevisionTitle ?:string;
  singleTelevisionDate ?:string;
  singleTelevisionshare_img ?:string;
  singleTelevisionContent ?:string;
  singleTelevisionnews_banner_img ?:string;
  facebook_switch ?:string;
  instagram_switch ?:string;
  linkedin_switch ?:string;
  envelope_gmail_switch ?:string;
  like_switch ?:string;
  televisionpermalink ?:string;
  sitename ?:string;
  cast_details ?:any[];
  constructor(private apiService : ApiService,private activateRoute:ActivatedRoute,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
  /* castconfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween:30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetween: 50
        },
           769: {
            slidesPerView: 2,
            spaceBetween: 50
        },
         991: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 50
        },
    }
  };  */ 

  singleTelOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 30,
    items: 4,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    navText: ["<div class='timeline-prev'><i class='icon-prev-btn'></i></div>", "<div class='timeline-next'><i class='icon-next-btn'></i></div>"],

  }
  telContent ?: string;
  ngOnInit(): void {
    

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

   
    this.canonicalService.setCanonicalURL();
    
    this.televisionUrl = this.activateRoute.snapshot.params['slug'];
    this.apiService.getSingleTelevisionPageContent(this.televisionUrl).subscribe({
      next : data => {
       
        this.television_relatedpost = JSON.parse(data).television_relatedpost;
       
        this.singleTelevisionTitle = JSON.parse(data).post[0].title;
        this.titleService.setTitle(this.singleTelevisionTitle+" - Swastik Production");  
        this.televisionpermalink = JSON.parse(data).post[0].televisionpermalink;
        this.singleTelevisionDate = JSON.parse(data).post[0].date;
        this.singleTelevisionshare_img = JSON.parse(data).post[0].share_img;
        this.singleTelevisionnews_banner_img = JSON.parse(data).post[0].news_banner_img;
        this.singleTelevisionContent = JSON.parse(data).post[0].television_content; 
        
        this.facebook_switch = JSON.parse(data).post[0].facebook_switch; 
        this.instagram_switch = JSON.parse(data).post[0].instagram_switch; 
        this.linkedin_switch = JSON.parse(data).post[0].linkedin_switch; 
        this.envelope_gmail_switch = JSON.parse(data).post[0].envelope_gmail_switch; 
        this.sitename = JSON.parse(data).post[0].sitename; 
        this.like_switch = JSON.parse(data).post[0].like_switch; 
        this.cast_details = JSON.parse(data).post[0].cast_details; 
        this.telContent = this.singleTelevisionContent?.toString().substring(0, 150) ;

        
        this.metaTagService.updateTag({ name: 'og:title', content: this.singleTelevisionTitle+' - Swastik Production' });
        this.metaTagService.updateTag({ name: 'twitter:title', content: this.singleTelevisionTitle+' - Swastik Production' });
        this.metaTagService.updateTag({ name: 'description', content: this.telContent+''});
        this.metaTagService.updateTag({ name: 'og:description', content: this.telContent+''});
        this.metaTagService.updateTag({ name: 'twitter:description', content: this.telContent+''});

        
      },
      error: err => {
        /* this.singleNewsPost = JSON.parse(err.error).message; */
      }
    });

  }

}
