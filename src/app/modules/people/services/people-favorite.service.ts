import { Injectable } from "@angular/core";

@Injectable()
export class PeopleFavoriteService {
  private favoriteIds?: number[];

  setFavorite(id: number): void {
    if (!this.favoriteIds) {
      this.favoriteIds = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    }

    this.favoriteIds?.push(id);
    localStorage.setItem('favorites', JSON.stringify(this.favoriteIds));
  }

  getFavoriteById(id: number): number | undefined {
    if (!this.favoriteIds) {
      this.favoriteIds = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    }

    return this.favoriteIds?.find(item => item === id);
  }

  removeFavorite(id: number): void {
    if (!this.favoriteIds) {
      this.favoriteIds = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    }

    const index = this.favoriteIds?.indexOf(id);
    if (index && index > -1) {
      this.favoriteIds?.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favoriteIds));
    }
  }
}
