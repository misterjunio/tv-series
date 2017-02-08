import { Injectable } from '@angular/core';

import {Series} from './series';

@Injectable()
export class SavedSeriesService {
    constructor() {
        if (window.localStorage.getItem('saved-series')) {
            const c = JSON.parse(window.localStorage.getItem('saved-series'));
            c.forEach(x => this.saved.add(x));
        }
    }

    update() {
        const json = JSON.stringify(this.saved);
        window.localStorage.setItem('saved-series', json);
    }

    saved: Set<Series> = new Set<Series>();

    add(series: Series) {
        this.saved.add(series);
        this.update();
    }

    remove(series: Series) {
        this.saved.delete(series);
        this.update();
    }

    has(series): boolean {
        return this.saved.has(series);
    }

    getAll(): Series[] {
        return Array.from(this.saved);
    }

    get count(): number {
        return this.saved.size;
    }
}