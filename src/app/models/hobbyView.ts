export class HobbyView {
  hobbyName: string;
  numberOfUsersThatHaveThisHobby: number;

  constructor(private _hobbyName: string, private _numberOfUsersThatHaveThisHobby: number) {
    this.hobbyName = _hobbyName;
    this.numberOfUsersThatHaveThisHobby = _numberOfUsersThatHaveThisHobby;
  }
}
