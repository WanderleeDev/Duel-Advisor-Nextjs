export interface CardParams {
  name: string;
  fname: string;
  id: string;
  konami_id: string;
  type: string;
  atk: number;
  def: number;
  level: number;
  race: string;
  attribute: string;
  link: number;
  linkmarker: string;
  scale: number;
  cardset: string;
  archetype: string;
  banlist: Banlist;
  sort: Sort;
  format: Format;
  misc: Misc;
  staple: boolean;
  has_effect: boolean;
  startdate: string;
  enddate: string;
  dateregion: DateRegion;
  num: number;
  offset: number;
}

export type CardParamsDTO = Partial<CardParams>;

export type Format =
  | "tcg"
  | "goat"
  | "ocg goat"
  | "speed duel"
  | "master duel"
  | "rush duel"
  | "duel links";

export type Sort =
  | "atk"
  | "def"
  | "name"
  | "type"
  | "level"
  | "id"
  | "new"
  | "random";

export type Misc = "yes";

export type Banlist = "tcg" | "ocg" | "goat";

export type DateRegion = "tcg" | "ocg";
