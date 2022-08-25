import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getHeaderContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/header', { responseType: 'text' });
  }

  getFooterContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/footer', { responseType: 'text' });
  }
  getHomeCarouselContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_carousel', { responseType: 'text' });
  }

  getHomeNewReleaseContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_new_release', { responseType: 'text' });
  }
  getHomeFeaturedWorkContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_featured_work', { responseType: 'text' });
  }
  getHomeWorldOfSwastikContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_world_of_swastik', { responseType: 'text' });
  }
  getHomeAwardsContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_awards', { responseType: 'text' });
  }
  getHomeLatestContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/home_latest', { responseType: 'text' });
  }
  getVfxPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/vfx_page', { responseType: 'text' });
  }
  getSyndicationPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/syndication_page', { responseType: 'text' });
  }
  getAboutPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/about_page', { responseType: 'text' });
  }
  getContactPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/contact_page', { responseType: 'text' });
  }
  getStudiosPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/studios_page', { responseType: 'text' });
  }
  getTelevisionPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/television_page', { responseType: 'text' });
  }
  getLatestNewsPageContent(): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/latest_news_page', { responseType: 'text' });
  }
  getSingleNewsPageContent(url?:string): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/single_news_page'+'?slug='+url, {  responseType: 'text' });
  }
  getSingleTelevisionPageContent(url?:string): Observable<any> {
    return this.http.get(environment.PUBLIC_BASE_URL + 'wp-json/swastik-ang/v1/single_television_page'+'?slug='+url, {  responseType: 'text' });
  }

  public subscriptionForm(formData: any) {  
  
    return this.http.post<any>(environment.PUBLIC_BASE_URL + 'wp-admin/admin-ajax.php', formData)
    /* .pipe(map(Users => {
      console.log(Users);
   
    return Users;
    })); */
  }
  public contactUsForm(formData: any) {  
  
    return this.http.post<any>(environment.PUBLIC_BASE_URL + 'wp-json/contact-form-7/v1/contact-forms/114/feedback', formData)
    /* .pipe(map(Users => {
      console.log(Users);
   
    return Users;
    })); */
  }

  
}
