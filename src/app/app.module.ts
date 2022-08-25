import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { VfxComponent } from './component/vfx/vfx.component';
import { SyndicationComponent } from './component/syndication/syndication.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TelevisionComponent } from './component/television/television.component';
import { StudiosComponent } from './component/studios/studios.component';
import { LatestNewsComponent } from './component/latest-news/latest-news.component';
import { SingleNewsComponent } from './component/single-news/single-news.component';
import { SingleTelevisionComponent } from './component/single-television/single-television.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VfxComponent,
    SyndicationComponent,
    AboutUsComponent,
    ContactUsComponent,
    TelevisionComponent,
    StudiosComponent,
    LatestNewsComponent,
    SingleNewsComponent,
    SingleTelevisionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'swastik' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxUsefulSwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
