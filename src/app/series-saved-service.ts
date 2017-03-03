import { Injectable } from '@angular/core';

import { Series } from './series';

@Injectable()
export class SavedSeriesService {
    constructor() {
        if (window.localStorage.getItem('saved-series')) {
            const c = JSON.parse(window.localStorage.getItem('saved-series'));
            c.forEach(x => this._add(x));
        }
    }

    update() {
        const json = JSON.stringify(this._saved);
        window.localStorage.setItem('saved-series', json);
    }

    _saved: Series[] = [];

    add(series: Series) {
        this._add(series);
        this.update();
    }

    _add(series: Series) {
        this._saved.splice(this._locationOf(series, this._saved, this._nameComparer, 0, this.count) + 1, 0, series);
    }

    _sortByName(seriesAry: Series[]): Series[] {
        seriesAry.sort(this._nameComparer);
        return seriesAry;
    }

    _locationOf(element, array, comparer, start, end) {
        if (array.length === 0) {
            return -1;
        }
        start = start || 0;
        end = end || array.length;
        var pivot = (start + end) >> 1;
        var c = comparer(element, array[pivot]);
        if (end - start <= 1) return c == -1 ? pivot - 1 : pivot;
        switch (c) {
            case -1: return this._locationOf(element, array, comparer, start, pivot);
            case 0: return pivot;
            case 1: return this._locationOf(element, array, comparer, pivot, end);
        };
    };

    _nameComparer(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    }

    remove(series: Series) {
        var i = this._saved.length;
        while (i--) {
            if (this._saved[i].id === series.id) {
                this._saved.splice(i, 1);
            }
        }
        this.update();
    }

    removeByAttr = function (arr, attr, value) {
        var i = arr.length;
        while (i--) {
            if (arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value)) {

                arr.splice(i, 1);

            }
        }
        return arr;
    }

    has(seriesId): boolean {
        for (const savedSeries of this._saved) {
            if (savedSeries.id == seriesId) {
                return true;
            }
        }
        return false;
    }

    getAll(): Series[] {
        return this._sortByName(this._saved);
    }

    get count(): number {
        return this._saved.length;
    }
}