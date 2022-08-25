import { Component, OnInit ,ElementRef} from '@angular/core';
import { ApiService } from '../../_services/api.service';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SlidesOutputData,OwlOptions } from 'ngx-owl-carousel-o';
/* import { SwiperOptions } from 'swiper';  */
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  form: any = {
    email: null,
    lists: null,
    form_id: null,
    es_email_page: null,
    es_email_page_url:null,
    es_hp_email:null,
    es_subscribe:null,
    es_status:null,
   
  };

  siteUrl = environment.PUBLIC_BASE_URL;
  homepage_slider ?: any[];
  homeNewRelease ?: any[];
  homeFeaturedWork ?: any[];
  homeWorldSwastikBgimg ?: string;
  homeWorldSwastikHeading ?: string;
  homeWorldSwastikDesc ?: string;
  homeWorldSwastikImages ?:any[];
  homeAwards ?:any[];
  homeAwardYear ?:any[];
  homeLatestNews ?:any[];
  instagramfeed ? : string;
   
  constructor(private apiService: ApiService,
     private domSanitizer: DomSanitizer,
     private elRef : ElementRef,
     private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService,
     ) { }
  sanitize(url:string){   
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);

  }
 /*  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-home-banner', 
      type: 'fraction',
    },
    navigation: {
      nextEl: '.home-next',
      prevEl: '.home-prev'
    },
    spaceBetween: 30
  };  
   
  newreleaseconfig: SwiperOptions = {
    slidesPerView: 4.2,
    spaceBetween: 30,
    pagination: { 
      el: '.new-release-pagination', 
      type: 'progressbar',
    },
    breakpoints: {
      499: {
        slidesPerView: 1.2,
        spaceBetween: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetween: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetween: 50
      },
    }
  };  

  newsconfig: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3.2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      
      499: {
        slidesPerView: 1.2,
        spaceBetween: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetween: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetween: 50
      },
    }
  };  
  
  timelineContentsconfig: SwiperOptions = {
    navigation: {
      nextEl: '.timeline-button-next',
      prevEl: '.timeline-button-prev',
    },
      grabCursor: true,
        spaceBetween: 10,
        autoHeight: true,
      autoplay: {
        delay:5000,
      },
    speed:700,
    
  }; 
  

  timelineDatesconfig: SwiperOptions = {
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
    
  };   */
  
  errorMessage = '';
  succMessage='';
  emailFieldcheck = false;
  isFormopen = true;
  
  timelineConOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 10,
    items: 1,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    navText: ["<div class='timeline-prev'><i class='icon-prev-btn'></i></div>", "<div class='timeline-next'><i class='icon-next-btn'></i></div>"],
    /* responsive: {
      0: {
        items: 1.2,
        stagePadding: 0
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 1,
        stagePadding: 250
      },
      1400: {
        items: 1,
        stagePadding: 300
      },
      1600: {
        items: 1,
        stagePadding: 350
      },
      1800: {
        items: 1,
        stagePadding: 400
      }
    } */

  }
  timelineConDataOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 10,
    items: 5,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    navText: ["<div class='timeline-button-prev'><i class='icon-prev-btn'></i></div>", "<div class='timeline-button-next'><i class='icon-next-btn'></i></div>"],
    /* responsive: {
      0: {
        items: 1.2,
        stagePadding: 0
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 1,
        stagePadding: 250
      },
      1400: {
        items: 1,
        stagePadding: 300
      },
      1600: {
        items: 1,
        stagePadding: 350
      },
      1800: {
        items: 1,
        stagePadding: 400
      }
    } */

  }
  homeOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 5,
    items: 1,
    lazyLoad: true,
    autoplay: true,
    nav: true,
    navText: ["<div class='home-prev'><i class='icon-prev-btn'></i></div>", "<div class='home-next'><i class='icon-next-btn'></i></div>"],

  }
  newReOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 40,
    items: 4.2,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    navText: ["<div class='icon-prev-btn'></div>", "<div class='icon-next-btn'></div>"],
    /* responsive: {
      0: {
        items: 1.2,
        stagePadding: 20
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 4.2,
        stagePadding: 250
      },
      1400: {
        items: 4.2,
        stagePadding: 300
      },
      1600: {
        items: 4.2,
        stagePadding: 350
      },
      1800: {
        items: 4.2,
        stagePadding: 400
      }
    } */

  }
  newsOptions: OwlOptions = {
    stagePadding: 20,
    loop: true,
    margin: 30,
    items: 3.2,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    navText: ["<div class='icon-prev-btn'></div>", "<div class='icon-next-btn'></div>"],
    /* responsive: {
      0: {
        items: 1.2,
        stagePadding: 0
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 1,
        stagePadding: 250
      },
      1400: {
        items: 1,
        stagePadding: 300
      },
      1600: {
        items: 1,
        stagePadding: 350
      },
      1800: {
        items: 1,
        stagePadding: 400
      }
    } */

  }
  customOptions: OwlOptions = {
    stagePadding: 200,
    loop: true,
    margin: 50,
    items: 1,
    lazyLoad: true,
    nav: true,
    navText: ["<div class='icon-prev-btn'></div>", "<div class='icon-next-btn'></div>"],

    /* responsive: {
      0: {
        items: 1.2,
        stagePadding: 0
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 1,
        stagePadding: 250
      },
      1400: {
        items: 1,
        stagePadding: 300
      },
      1600: {
        items: 1,
        stagePadding: 350
      },
      1800: {
        items: 1,
        stagePadding: 400
      }
    } */
  }

  

  onSubmit(): void {
    if(this.form.email== null){
      this.emailFieldcheck = true;
    }else{
      this.emailFieldcheck = false;
      var formData: any = new FormData();
      formData.append('esfpx_email', this.form.email);
      formData.append('esfpx_form_id', '2');
      formData.append('esfpx_es_email_page', '415');
      formData.append('esfpx_es_email_page_url', this.router.url);
      formData.append('esfpx_es-subscribe', '64b293602b');
      formData.append('esfpx_es_hp_email', '');
      formData.append('esfpx_lists[]', '2');
      formData.append('esfpx_status', 'Unconfirmed');
      formData.append('es', 'subscribe');
      formData.append('action', 'es_add_subscriber');
      
    
      this.apiService.subscriptionForm(formData).subscribe({
        next: data => {
          
          if(data.status=='SUCCESS'){
            this.errorMessage = '';
            this.succMessage = data.message_text;
            this.isFormopen = false;
          }else{
            this.errorMessage = data.message_text;
          }
        
        },
        error: err => {
          
          this.errorMessage = err.error.message;
        
        }
      });

    }
    
  }

  ngOnInit(): void {
   
    this.titleService.setTitle("Home - Swastik Production");  

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
    
    this.apiService.getHomeCarouselContent().subscribe({
      next: data => {
        this.homepage_slider = JSON.parse(data).carousel;
      },
      error: err => {
        this.homepage_slider = JSON.parse(err.error).message;
      }
    });
  
    this.apiService.getHomeNewReleaseContent().subscribe({
      next: data => {
        this.homeNewRelease = JSON.parse(data).posts;
      },
      error: err => {
        this.homeNewRelease = JSON.parse(err.error).message;
      }
    }); 
    
    this.apiService.getHomeFeaturedWorkContent().subscribe({
      next: data => {
        this.homeFeaturedWork = JSON.parse(data).posts;
      },
      error: err => {
        this.homeFeaturedWork = JSON.parse(err.error).message;
      }
    }); 

    this.apiService.getHomeWorldOfSwastikContent().subscribe({
      next: data => {
       
        this.homeWorldSwastikBgimg = JSON.parse(data).bg_img;
        this.homeWorldSwastikHeading = JSON.parse(data).heading;
        this.homeWorldSwastikDesc = JSON.parse(data).desc;
        this.homeWorldSwastikImages = JSON.parse(data).images;
      },
      error: err => {
        this.homeWorldSwastikBgimg = JSON.parse(err.error).message;
      }
    }); 
    this.apiService.getHomeAwardsContent().subscribe({
      next: data => {
       
        this.homeAwards = JSON.parse(data).posts;
        this.homeAwardYear = JSON.parse(data).yearsArray;
        
      },
      error: err => {
        this.homeAwards = JSON.parse(err.error).message;
      }
    }); 
    this.apiService.getHomeLatestContent().subscribe({
      next: data => {
       
        this.homeLatestNews = JSON.parse(data).posts;
        this.instagramfeed = JSON.parse(data).instagramfeed;
        
        
      },
      error: err => {
        this.homeLatestNews = JSON.parse(err.error).message;
      }
    }); 
  }

  

}
