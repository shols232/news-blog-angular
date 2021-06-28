import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './container/sections/home/home.component';
import { EntertainmentComponent } from './container/sections/entertainment/entertainment.component';
import { SectionComponent } from './container/sections/section/section.component';
import { CreatePostComponent } from './container/sections/create-post/create-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndDirective } from './container/sections/create-post/dnd.directive';
import {ProgressComponent} from './progress/progress.component';
import { VjsPlayerComponent } from './utils/vjs-player/vjs-player.component';
import { BlogPostComponent } from './container/sections/blog-post/blog-post.component';
import { SportsComponent } from './container/sections/sports/sports.component';
import { BusinessComponent } from './container/sections/business/business.component';
import { WomenComponent } from './container/sections/women-issues/women.component';
import { ResearchArticles } from './container/sections/research-articles/research-articles.component';
import { HumanityComponent } from './container/sections/humanity/humanity.component';
import { PersonalStoriesComponent } from './container/sections/personal-stories/personal-stories.component';
import { InterviewsComponent } from './container/sections/interviews/interviews.component';
import { EnvironmentComponent } from './container/sections/environment/environment.component'
import { HttpClientModule } from '@angular/common/http';
import { PoliticsComponent } from './container/sections/politics/politics.component';
import { AuthComponent } from './container/sections/auth/auth.component';
import { toggleVisibilityDirective } from '../app/utils/vjs-player/toggle-visibility.component';
import { ImagePreloaderDirective } from './utils/image-preloader.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component'
import { CookieService } from 'ngx-cookie-service';
import { VideosComponent } from './container/sections/videos/videos.component';
import { ForiddenPageComponent } from './foridden-page/foridden-page.component';
import { TechnologyComponent } from './container/sections/technology/technology.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './container/ads/ads.component';
import { NewsComponent } from './container/sections/news/news.component';
import { RomanceComponent } from './container/sections/romance/romance.component';
import { SDGsComponent } from './container/sections/sdgs/sdgs.component';
import { CrimeComponent } from './container/sections/crime/crime.component';
import { FeaturesComponent } from './container/sections/features/features.component';
import { ContactUsComponent } from './container/sections/contact-us/contact-us.component';
import { HealthComponent } from './container/sections/health/health.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContainerComponent,
    HomeComponent,
    EntertainmentComponent,
    ProgressComponent,
    DndDirective,
    SectionComponent,
    CreatePostComponent,
    VjsPlayerComponent,
    BlogPostComponent,
    SportsComponent,
    BusinessComponent,
    WomenComponent,
    ResearchArticles,
    HumanityComponent,
    PersonalStoriesComponent,
    InterviewsComponent,
    EnvironmentComponent,
    PoliticsComponent,
    AuthComponent,
    toggleVisibilityDirective,
    ImagePreloaderDirective,
    PaginationComponent,
    PageNotFoundComponent,
    VideosComponent,
    ForiddenPageComponent,
    TechnologyComponent,
    FooterComponent,
    AdsComponent,
    NewsComponent,
    RomanceComponent,
    SDGsComponent,
    CrimeComponent,
    FeaturesComponent,
    ContactUsComponent,
    HealthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
