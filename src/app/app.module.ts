import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CanvasComponent } from './canvas/canvas.component';
import { Auth } from './auth0.service';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'garden', component: CanvasComponent, canActivate: [AuthGuard] },
  { path: '', component: NewsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    CanvasComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }, Auth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
