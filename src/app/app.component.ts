import { Component , OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  siteUrl = environment.PUBLIC_BASE_URL;
  logo ? :string;
  scrollLogo ? :string;
  headermenu ? : any[];
  footerMenu ? : any[];
  jsonData ? :string;
  about_us_heading ? : string;
  about_us_content ? : string;
  addrss_footer ? : string;
  copyright ?: string;
  call_image ?: string;
  contact_footer ? : string;
  email_footer ? : string;
  mail_image ? : string;
  heading_addrss_footer ? : string;
  main_heading ? : string;
  image_one ? : string;
  image_two ? : string;
  heading1 ? : string;
  heading2 ? : string;
  heading3 ? : string;
  heading4 ? : string;
  heading5 ? : string;
  heading1url ? : string;
  heading2url ? : string;
  heading3url ? : string;
  heading4url ? : string;
  heading5url ? : string;
  fb_url ? : string;
  insta_url ? : string;
  twitter_url ? : string;
  youtube_url ? : string;
  constructor(private apiService: ApiService) { }
  title = 'swastik';

  openMainmenu():void {
    
    $('#ubermenu-main-7-header-menu-2').collapse('toggle');
     $('.menu-button').toggleClass("collapsed openMenu");
			
  }
  ngOnInit(): void {
    this.apiService.getHeaderContent().subscribe({
      next: data => {
        this.logo = JSON.parse(data).logo;
        this.scrollLogo = JSON.parse(data).scroll_logo;
        this.headermenu = JSON.parse(data).menus;
      },
      error: err => {
        this.logo = JSON.parse(err.error).message;
      }
    });

    this.apiService.getFooterContent().subscribe({
      next: data => {
        
        this.about_us_heading = JSON.parse(data).about_us_heading;
        this.about_us_content = JSON.parse(data).about_us_content;
        this.footerMenu = JSON.parse(data).menus;
        this.addrss_footer = JSON.parse(data).addrss_footer;
        this.copyright = JSON.parse(data).copyright;
        this.call_image = JSON.parse(data).call_image;
        this.contact_footer = JSON.parse(data).contact_footer;
        this.email_footer = JSON.parse(data).email_footer;
        this.mail_image = JSON.parse(data).mail_image;
        this.heading_addrss_footer = JSON.parse(data).heading_addrss_footer;
        this.main_heading = JSON.parse(data).main_heading;
        this.image_one = JSON.parse(data).image_one;
        this.image_two = JSON.parse(data).image_two;
        this.heading1 = JSON.parse(data).heading1;
        this.heading2 = JSON.parse(data).heading2;
        this.heading3 = JSON.parse(data).heading3;
        this.heading4 = JSON.parse(data).heading4;
        this.heading5 = JSON.parse(data).heading5;
        this.heading1url = JSON.parse(data).heading1url;
        this.heading2url = JSON.parse(data).heading2url;
        this.heading3url = JSON.parse(data).heading3url;
        this.heading4url = JSON.parse(data).heading4url;
        this.heading5url = JSON.parse(data).heading5url;
        this.fb_url = JSON.parse(data).fb_url;
        this.insta_url = JSON.parse(data).insta_url;
        this.twitter_url = JSON.parse(data).twitter_url;
        this.youtube_url = JSON.parse(data).youtube_url;


      },
      error: err => {
        this.jsonData = JSON.parse(err.error).message;
      }
    });
  }
}
