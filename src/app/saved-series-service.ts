import { Injectable } from '@angular/core';

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

    saved: Set<number> = new Set<number>();

    add(id: number) {
        this.saved.add(id);
        this.update();
    }

    remove(id: number) {
        this.saved.delete(id);
        this.update();
    }

    has(id): boolean {
        return this.saved.has(id);
    }

    get count(): number {
        return this.saved.size;
    }
}