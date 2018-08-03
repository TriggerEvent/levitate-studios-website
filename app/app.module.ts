import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound.component';

import { TopNavComponent } from './baseComponents/top-nav/top-nav.component';
import { FooterComponent } from './baseComponents/footer/footer.component';
import { ContactComponent } from './popupComponents/contact/contact.component';

import { HomeComponent } from './pageComponents/home/home.component';
import { AboutComponent } from './pageComponents/about/about.component';
import { JobsComponent } from './pageComponents/jobs/jobs.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TopNavComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    JobsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
