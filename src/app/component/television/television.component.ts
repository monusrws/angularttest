import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

declare var $: any;

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  televisionNewRelease ?: any[];
  televisionTrailers ?: any[];
  televisionCategory?: any[];
  televisionBannerImage ?: string;
  televisionTitle ?: string;
  televisionContent ?: string;
  constructor(private apiService:ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) { }
  ottconfig: SwiperOptions = {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.ott-slider-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      // when window width is <= 499px
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

  ottSliderAcclaimed: SwiperOptions = {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.ott-slider-acclaimed-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      // when window width is <= 499px
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
    },
  };  
  
  showVideoModal(title:string,video_url : string):void {
    $('#videoModal .modal-title').text(title);
			$('#videoModal_Iframe').attr('src',video_url);
    $("#videoModal").modal('show');
  }
  hideVideoModal():void {
    
    $('#videoModal .modal-title').text('');
			$('#videoModal_Iframe').attr('src','');
    $("#videoModal").modal('hide');
  }

  ngOnInit(): void {
    this.titleService.setTitle("Television - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:'Our television shows are known to broaden perspectives, reignite hidden human emotions, and spark a sense of belonging to the ingrained Indian culture. Having set a hoard of records, Swastik Productions television shows comprise of distinctive formats, handpicked Ips, and top TRP grossers.'},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'article' },
      { name: 'og:title', content: 'Television - Swastik Production' },
      { name: 'og:description', content: 'Our television shows are known to broaden perspectives, reignite hidden human emotions, and spark a sense of belonging to the ingrained Indian culture. Having set a hoard of records, Swastik Productions television shows comprise of distinctive formats, handpicked Ips, and top TRP grossers.' },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'Our television shows are known to broaden perspectives, reignite hidden human emotions, and spark a sense of belonging to the ingrained Indian culture. Having set a hoard of records, Swastik Productions television shows comprise of distinctive formats, handpicked Ips, and top TRP grossers.' },
      { name: 'twitter:title', content: 'Television - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();

    
    this.apiService.getTelevisionPageContent ().subscribe({
      next : data => {
        console.log(JSON.parse(data));
       this.televisionNewRelease = JSON.parse(data).new_release;
       this.televisionTrailers = JSON.parse(data).trailers;
       this.televisionCategory = JSON.parse(data).television_category;
       
       this.televisionBannerImage = JSON.parse(data).banner_image;
        this.televisionTitle = JSON.parse(data).title;
        this.televisionContent = JSON.parse(data).television_content;
       

      },
      error: err => {
        this.televisionNewRelease = JSON.parse(err.error).message;
      }
    });
  }

}
