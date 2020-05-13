export interface IShowSearchData {
  name : string,
  language : string,
  genres : string[],
  rating:{ average: number},
  image:{medium : string},
  summary: string;
}
