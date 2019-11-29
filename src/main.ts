import { enableProdMode, OnInit, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Hero } from './app/hero';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export class main {
    @Input() hero: Hero;
    Avengers = ['Ironman', 'Captain America', 'Hulk', 'Thor'];
  }
