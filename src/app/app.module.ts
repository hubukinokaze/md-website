import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatMenuModule, MatToolbarModule,
  MatIconModule, MatSidenavModule,
  MatProgressBarModule, MatGridListModule,
  MatListModule
} from '@angular/material';
import { GithubService } from './services/GithubService';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

