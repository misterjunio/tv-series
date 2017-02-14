// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import { enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { OnsenModule } from 'angular2-onsenui';
import './app/rxjs-extensions';

import { SeriesApp } from './app/app';
import { Menu } from './app/menu';
import { SeriesNavigator } from './app/navigator-series';
import { SeriesTabbar } from './app/tabbar-series';
import { MySeries } from './app/my-series';
import { AllSeries } from './app/all-series';
import { SeriesPage } from './app/series-page';
import { PeopleNavigator } from './app/navigator-people';
import { PeoplePage } from './app/people-page';
import { SettingsPage } from './app/settings-page';

import { SeriesService } from './app/series-service';
import { SavedSeriesService } from './app/saved-series-service';
import { SeriesSearchService } from './app/series-search-service';
import { PeopleSearchService } from './app/people-search-service';

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
        Menu,
        SeriesNavigator,
        SeriesTabbar,
        MySeries,
        AllSeries,
        SeriesPage,
        PeopleNavigator,
        PeoplePage,
        SettingsPage
    ],
    entryComponents: [
        Menu,
        SeriesNavigator,
        SeriesTabbar,
        MySeries,
        AllSeries,
        SeriesPage,
        PeopleNavigator,
        PeoplePage,
        SettingsPage
    ],
    providers: [
        SeriesService,
        SavedSeriesService,
        SeriesSearchService,
        PeopleSearchService
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
