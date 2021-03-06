// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

// Application code starts here
import { enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'angular2-onsenui';
import './app/rxjs-extensions';

import { AppRoutingModule } from './app/routes';

import { SeriesApp } from './app/app';
import { Menu } from './app/menu';
import { SeriesNavigator } from './app/series-navigator';
import { SeriesTabbar } from './app/series-tabbar';
import { SavedSeries } from './app/series-saved';
import { AllSeries } from './app/series-all';
import { SeriesPage } from './app/series-page';
import { PeopleNavigator } from './app/people-navigator';
import { PeoplePage } from './app/people-page';
import { PersonPage } from './app/person-page';
import { SettingsPage } from './app/settings-page';

import { SeriesService } from './app/series-service';
import { SavedSeriesService } from './app/series-saved-service';
import { SeriesSearchService } from './app/series-search-service';
import { PeopleSearchService } from './app/people-search-service';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        SeriesApp,
        Menu,
        SeriesNavigator,
        SeriesTabbar,
        SavedSeries,
        AllSeries,
        SeriesPage,
        PeopleNavigator,
        PeoplePage,
        PersonPage,
        SettingsPage
    ],
    entryComponents: [
        Menu,
        SeriesNavigator,
        SeriesTabbar,
        SavedSeries,
        AllSeries,
        SeriesPage,
        PeopleNavigator,
        PeoplePage,
        PersonPage,
        SettingsPage
    ],
    providers: [
        SeriesService,
        SavedSeriesService,
        SeriesSearchService,
        PeopleSearchService,
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
