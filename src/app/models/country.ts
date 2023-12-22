export class Country {
  name: string;
  code?: string;
  constructor(private _name: string, private _code?: string) {
    this.name = _name;
    this.code = _code;
  }
}
