import { ApplicationConfig, NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
/* 
import { AppComponent } from './app.component';
import { SpaComponent } from './spa.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

@NgModule({
  //declarations: [AppComponent, SpaComponent, HeaderComponent, FooterComponent],
  declarations: [],
  imports: [BrowserModule, 
    RouterModule.forRoot(routes), 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule],
  //bootstrap: [AppComponent]
  bootstrap: []
})
export class AppModule {}
