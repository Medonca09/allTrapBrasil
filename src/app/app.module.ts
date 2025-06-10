import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyHomeComponent } from './shared/components/body-home/body-home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BodyAboutComponent } from './shared/components/body-about/body-about.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyHomeComponent,
    NavBarComponent,
    HomeComponent,
    BodyAboutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
