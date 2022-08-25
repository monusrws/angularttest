import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/shared/canonical.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  siteurl = environment.PUBLIC_BASE_URL;
  
  form: any = {
    email: '',
    name: '',
    phone: '',
    message: '',
  };
    contactPost?:any[];
   contactBannerImage ? : string;
   contactTitle ? : string;
   contactContent ? : string;
   contact_heading ? : string;
   contact_address ? : string;
   contact_no ? : string;
   telephone_img ? : string;
   mail_img ? : string;
   portfolio_heading ? : string;
   portfolio_email ? : string;
   portfolio_contact ? : string;
   collaborate_heading ? : string;
   collaborate_email ? : string;
   collaborate_contact_no ? : string;
  constructor(private apiService : ApiService,
    private router:Router,
     private metaTagService: Meta,     
     private titleService: Title,
     private canonicalService: CanonicalService) {
      
     }
  errorMessage = '';
  succMessage='';
  nameFieldcheck = false;
  emailFieldcheck = false;
  phoneFieldcheck = false;
  msgFieldcheck = false;
  isFormopen = true;
  isLoadingbutton = false;
  isSubmitbutton = true;

  onSubmit(): void {
    if(this.form.name== ''){
      this.nameFieldcheck = true;
      this.emailFieldcheck = true;
      this.phoneFieldcheck = true;
      this.msgFieldcheck = true;
    }else if(this.form.email== ''){
      this.emailFieldcheck = true;
      this.nameFieldcheck = false;
    }else if(this.form.phone== ''){
      this.phoneFieldcheck = true;
      this.emailFieldcheck = false;
      this.nameFieldcheck = false;
    }else if(this.form.message== ''){
      this.msgFieldcheck = true;
      this.emailFieldcheck = false;
      this.nameFieldcheck = false;
      this.phoneFieldcheck = false;
    }else{
      this.emailFieldcheck = false;
      this.nameFieldcheck = false;
      this.phoneFieldcheck = false;
      this.msgFieldcheck =false;
      this.isLoadingbutton = true;
      this.isSubmitbutton = false;
      var formData: any = new FormData();
      
      formData.append('_wpcf7', '114');
      formData.append('_wpcf7_version', '5.1.6');
      formData.append('_wpcf7_locale', 'en_US');
      formData.append('_wpcf7_unit_tag', 'wpcf7-f114-o1');
      formData.append('_wpcf7_container_post', '0');
      formData.append('your-name', this.form.name);
      formData.append('your-email', this.form.email);
      formData.append('your-phone', this.form.phone);
      formData.append('your-message', this.form.message);
      
    
      this.apiService.contactUsForm(formData).subscribe({
        next: data => {
          
          if(data.status !='validation_failed'){
            this.errorMessage = '';
            this.succMessage = 'We appreciate you connecting with us. We’ll get back to you soon.';
            this.isFormopen = false;
            this.isLoadingbutton = false;
            this.isSubmitbutton = true;
          }else{
            this.isLoadingbutton = false;
            this.isSubmitbutton = true;
            this.errorMessage = data.message;
          }
        
        },
        error: err => {
          
          this.errorMessage = err.error.message;
        
        }
      });

    }
    
  }
  metaDescription = 'Swastik Productions is an end-to-end production company that indulges in television shows, feature films, and captivating content that narrates stories capable of offering an impact on a global audience.';

  ngOnInit(): void {
    this.titleService.setTitle("Contact - Swastik Production");  

    this.metaTagService.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name : 'description',
        content:this.metaDescription},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Contact - Swastik Production' },
      { name: 'og:description', content: this.metaDescription },
      { name: 'og:url', content: this.router.url },
      { name: 'og:site_name', content: 'Swastik Production' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: this.metaDescription },
      { name: 'twitter:title', content: 'Contact - Swastik Production' },
      /* { name: 'author', content: 'Digamber Singh' }, */
     
      /* { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }, */
     
    ]);
    this.canonicalService.setCanonicalURL();


    this.apiService.getContactPageContent().subscribe({
      next : data => {
       this.contact_heading = JSON.parse(data).post.contact_heading;
       this.contact_address = JSON.parse(data).post.contact_address;
       this.contact_no = JSON.parse(data).post.contact_no;
       this.telephone_img = JSON.parse(data).post.telephone;
       this.mail_img = JSON.parse(data).post.mail;
       this.portfolio_heading = JSON.parse(data).post.portfolio_heading;
       this.portfolio_email = JSON.parse(data).post.portfolio_email;
       this.portfolio_contact = JSON.parse(data).post.portfolio_contact;
       this.collaborate_heading = JSON.parse(data).post.collaborate_heading;
       this.collaborate_email = JSON.parse(data).post.collaborate_email;
       this.collaborate_contact_no = JSON.parse(data).post.collaborate_contact_no;
      
       this.contactBannerImage = JSON.parse(data).banner_image;
        this.contactTitle = JSON.parse(data).title;
        this.contactContent = JSON.parse(data).contact_content;
       

      },
      error: err => {
        this.contactPost = JSON.parse(err.error).message;
      }
    });
  }

}
