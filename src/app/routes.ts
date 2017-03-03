import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesNavigator } from './series-navigator';
import { PeopleNavigator } from './people-navigator';
import { SettingsPage } from './settings-page';

const routes: Routes = [
    { path: '', redirectTo: '/series', pathMatch: 'full' },
    { path: 'series', component: SeriesNavigator },
    { path: 'people', component: PeopleNavigator },
    { path: 'settings', component: SettingsPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
