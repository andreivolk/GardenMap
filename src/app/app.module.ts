import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GardenComponent } from './garden/garden.component';
import { Auth } from './services/auth0.service';
import { UnitconversionService } from './services/unitconversion.service';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from './auth.guard';
import { GardenlistComponent } from './gardenlist/gardenlist.component';
import { BedComponent } from './bed/bed.component';

const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'gardenlist', component: GardenlistComponent, canActivate: [AuthGuard] },
  { path: 'garden/:id', component: GardenComponent, canActivate: [AuthGuard] },
  { path: 'bed/:id', component: BedComponent, canActivate: [AuthGuard] },
  { path: '', component: NewsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    GardenComponent,
    NewsComponent,
    GardenlistComponent,
    BedComponent
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
      deps: [Http, RequestOptions]
    }, Auth, AuthGuard, UnitconversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
