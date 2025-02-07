import { Attribute } from "../types/Attribute.enum";
import { HumanReadableCardType } from "../types/CardType.enum";
import { FrameType } from "../types/FrameType.enum";
import { LinkMarker } from "../types/LinkMarker.enum";
import { MonsterType } from "../types/MonsterType.enum";
import { Race } from "../types/Race.enum";

export interface Card {
  atk?: number;
  attribute?: Attribute;
  archetype: string;
  card_images: CardImage[];
  card_prices: CardPrice[];
  card_sets: CardSet[];
  banlist_info?: BanListInfo;
  def?: number;
  desc: string;
  frameType: FrameType;
  id: number;
  level?: number;
  name: string;
  race: Race;
  type: MonsterType;
  humanReadableCardType: HumanReadableCardType;
  typeline: string[];
  ygoprodeck_url: string;
  linkval?: number;
  scale?: number;
  linkmarkers?: LinkMarker[];
  pend_desc?: string;
  monster_desc?: string;
}

export interface CardImage {
  id: number;
  image_url: string;
  image_url_cropped: string;
  image_url_small: string;
}

export interface CardPrice {
  amazon_price: string;
  cardmarket_price: string;
  coolstuffinc_price: string;
  ebay_price: string;
  tcgplayer_price: string;
}

export interface CardSet {
  set_code: string;
  set_name: string;
  set_price: string;
  set_rarity: string;
  set_rarity_code: string;
}

export interface BanListInfo {
  ban_goat: string;
}

export interface Meta {
  generated: string;
  current_rows: number;
  next_page: string;
  next_page_offset: number;
  pages_remaining: number;
  rows_remaining: number;
  total_pages: number;
  total_rows: number;
  previous_page?: string;
  previous_page_offset?: number;
}
