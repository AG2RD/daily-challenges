import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './features/countdown/countdown.component';
import { TimeFormatterPipe } from './features/time-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    TimeFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
