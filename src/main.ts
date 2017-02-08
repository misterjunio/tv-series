// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import { enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { OnsenModule } from 'angular2-onsenui';

import { SeriesApp } from './app/app';
import { MySeries } from './app/my-series';
import { Page } from './app/page';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule
    ],
    declarations: [
        SeriesApp,
        MySeries,
        Page
    ],
    entryComponents: [
        MySeries
    ],
    bootstrap: [
        SeriesApp
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
