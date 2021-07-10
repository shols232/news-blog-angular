import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EntertainmentComponent } from './container/sections/entertainment/entertainment.component';
import { HomeComponent } from './container/sections/home/home.component';
import { SportsComponent } from './container/sections/sports/sports.component'
import { CreatePostComponent } from './container/sections/create-post/create-post.component'
import { BlogPostComponent } from './container/sections/blog-post/blog-post.component';
import { BusinessComponent } from './container/sections/business/business.component';
import { PoliticsComponent } from './container/sections/politics/politics.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { AuthComponent } from './container/sections/auth/auth.component';
import { AuthGuardService } from './container/sections/auth/auth-guard.service';
import { VideosComponent } from './container/sections/videos/videos.component';
import { ForiddenPageComponent } from './foridden-page/foridden-page.component'
import { CrimeComponent } from './container/sections/crime/crime.component';
import { RomanceComponent } from './container/sections/romance/romance.component';
import { FeaturesComponent } from './container/sections/features/features.component';
import { SDGsComponent } from './container/sections/sdgs/sdgs.component';
import { ContactUsComponent } from './container/sections/contact-us/contact-us.component';
import { HealthComponent } from './container/sections/health/health.component';
import { NewsComponent } from './container/sections/news/news.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'auth/login', component:AuthComponent},
  {path:'section', component:ContainerComponent, children: [
    {path:'entertainment', component:EntertainmentComponent},
    {path:'sports', component:SportsComponent},
    {path:'business', component:BusinessComponent},
    {path:'crime', component:CrimeComponent},
    {path:'news', component:NewsComponent},
    {path:'videos', component:VideosComponent},
    {path:'romance', component:RomanceComponent},
    {path:'features', component:FeaturesComponent},
    {path:'sdgs', component:SDGsComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'politics', component:PoliticsComponent},
    {path:'health', component:HealthComponent},
    // {path:'technology', component:TechnologyComponent},
  ]},
  {path:'article/:slug', component:BlogPostComponent},
  {path:'404-error', component:PageNotFoundComponent},
  {path:'403-error', component:ForiddenPageComponent},
  {path:'create-post', component:CreatePostComponent, canActivate:[AuthGuardService]},
  {path:'**', redirectTo:'404-error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
