import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EntertainmentComponent } from './container/sections/entertainment/entertainment.component';
import { HomeComponent } from './container/sections/home/home.component';
import { SportsComponent } from './container/sections/sports/sports.component'
import { CreatePostComponent } from './container/sections/create-post/create-post.component'
import { BlogPostComponent } from './container/sections/blog-post/blog-post.component';
import { BusinessComponent } from './container/sections/business/business.component';
import { WomenComponent } from './container/sections/women-issues/women.component';
import { ResearchArticles } from './container/sections/research-articles/research-articles.component';
import { HumanityComponent } from './container/sections/humanity/humanity.component';
import { PersonalStoriesComponent } from './container/sections/personal-stories/personal-stories.component';
import { InterviewsComponent } from './container/sections/interviews/interviews.component';
import { EnvironmentComponent } from './container/sections/environment/environment.component';
import { PoliticsComponent } from './container/sections/politics/politics.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { AuthComponent } from './container/sections/auth/auth.component';
import { AuthGuardService } from './container/sections/auth/auth-guard.service';
import { VideosComponent } from './container/sections/videos/videos.component';
import { TechnologyComponent } from './container/sections/technology/technology.component'
import { ForiddenPageComponent } from './foridden-page/foridden-page.component'
import { NewsComponent } from './container/sections/news/news.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'auth/login', component:AuthComponent},
  {path:'section', component:ContainerComponent, children: [
    {path:'entertainment', component:EntertainmentComponent},
    {path:'sports', component:SportsComponent},
    {path:'business', component:BusinessComponent},
    {path:'women-issues', component:WomenComponent},
    {path:'videos', component:VideosComponent},
    {path:'research-articles', component:ResearchArticles},
    {path:'humanity', component:HumanityComponent},
    {path:'personal-stories', component:PersonalStoriesComponent},
    {path:'interviews', component:InterviewsComponent},
    {path:'news', component:NewsComponent},
    {path:'environment', component:EnvironmentComponent},
    {path:'politics', component:PoliticsComponent},
    {path:'technology', component:TechnologyComponent},
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
