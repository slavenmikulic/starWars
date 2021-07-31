export class People {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created?: Date;
  edited?: Date;
  url?: string;
  id?: number;

  constructor(data?: Partial<People>) {
    Object.assign(this, data);
  }
}
