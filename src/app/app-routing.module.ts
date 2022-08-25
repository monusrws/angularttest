import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VfxComponent } from './component/vfx/vfx.component';
import { SyndicationComponent } from './component/syndication/syndication.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { StudiosComponent } from './component/studios/studios.component';
import { TelevisionComponent } from './component/television/television.component';
import { LatestNewsComponent } from './component/latest-news/latest-news.component';
import { SingleNewsComponent } from './component/single-news/single-news.component';
import { SingleTelevisionComponent } from './component/single-television/single-television.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'syndication', component: SyndicationComponent },
  { path: 'vfx', component: VfxComponent },
  { path: 'studios', component: StudiosComponent },
  { path: 'television', component: TelevisionComponent },
  { path: 'television/:slug', component: SingleTelevisionComponent },
  { path: 'latest-news', component: LatestNewsComponent },
  {path: "news/:slug", component: SingleNewsComponent},

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
