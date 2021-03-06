export class Movie {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  characters?: string[];
  planets?: string[];
  starships?: string[];
  vehicles?: string[];
  species?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
  id?: number;

  constructor(init?: Partial<Movie>) {
    Object.assign(this, init);
  }
}
