import {Tile} from "./tile";

export class TileRandomizer {
  static readonly LIMITS = {
    1:{ 1:1 },
    2:{ 1:2 },
    3:{ 2:1 },
    4:{ 2:2 }
  }
    static generateRandomTileList(list: Array<Tile>, size:number): Array<Tile> {
      // for (let i = 0; i < size; i++) {
      //
      // }
      var strings = Object.keys(TileRandomizer.LIMITS);
      var strings1 = Object.keys(strings);
      console.log(strings[3])
      console.log(strings1[3])
      return undefined;
    }
}
