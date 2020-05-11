import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

import {createCustomElement} from '@angular/elements';
import { HelloButtonComponent } from './hello-button/hello-button.component';
import { AdderComponent } from './adder/adder.component';
import { SquarerootComponent } from './squareroot/squareroot.component';
import { PowerComponent } from './power/power.component';
import { MoviedisplayComponent } from './moviedisplay/moviedisplay.component';
import {MovieService} from './services/movie.service';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HelloButtonComponent,
    AdderComponent,
    SquarerootComponent,
    PowerComponent,
    MoviedisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [MoviedisplayComponent],
  providers: [
    MovieService
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
    // const customElement = createCustomElement(HelloButtonComponent, {injector});
    // customElements.define('app-hello-button', customElement);

    // const customAdderElement = createCustomElement(AdderComponent, {injector});
    // customElements.define('app-adder', customAdderElement);

    // const customSqrtElement = createCustomElement(SquarerootComponent, {injector});
    // customElements.define('app-squareroot', customSqrtElement);

    // const customPowElement = createCustomElement(PowerComponent, {injector});
    // customElements.define('app-power', customPowElement);

    const customMovieElement = createCustomElement(MoviedisplayComponent, {injector});
    customElements.define('app-moviedisplay', customMovieElement);

  }

  ngDoBootstrap() {
  }

 }
