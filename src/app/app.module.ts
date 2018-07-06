import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    // NG MODULES
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}
