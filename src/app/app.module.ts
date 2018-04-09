import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';
import { PromiseCallbackComponent } from './promise-callback/promise-callback.component';
import { ObsevableRxComponent } from './obsevable-rx/obsevable-rx.component';

import { HttpPromiseService } from './services/http-promise.service';
import { HttpObservableService } from './services/http-observable.service';
import { JwtTokenComponent } from './jwt-token/jwt-token.component';

import { MyHttpInterceptor } from './interceptors/token-bearer';

const appRoutes: Routes = [
  {
    path: 'app-simple-http',
    component: SimpleHttpComponent
  },
  {
    path: 'app-promise-callback',
    component: PromiseCallbackComponent
  }, 
  {
    path: 'app-obsevable-rx',
    component: ObsevableRxComponent
  },
  { 
    path: '',redirectTo: '/app-simple-http',pathMatch: 'full'
  },
  {
    path: 'app-jwt-token',
    component: JwtTokenComponent
  },
  { 
    path: '**', component: PageNotFoundComponent 
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    PageNotFoundComponent,
    PromiseCallbackComponent,
    ObsevableRxComponent,
    JwtTokenComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    HttpPromiseService,
    HttpObservableService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
