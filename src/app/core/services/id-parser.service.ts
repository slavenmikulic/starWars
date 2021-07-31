export class IdParserService {
  static parseId(value: string): number | null {
    const regex = /\d+/;
    const data = value?.match(regex);
    if (data && data[0]) {
      const id = Number.parseInt(data[0], 10);

      if (!isNaN(id)) {
        return id;
      }
    }

    return null;
  }

}
