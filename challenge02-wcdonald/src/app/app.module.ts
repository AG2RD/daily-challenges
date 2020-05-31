import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaddyComponent } from './features/caddy/caddy.component';
import { MenuComponent } from './features/menu/menu.component';
import { PopularComponent } from './features/popular/popular.component';
import { NavbarComponent } from './features/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaddyComponent,
    MenuComponent,
    PopularComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
