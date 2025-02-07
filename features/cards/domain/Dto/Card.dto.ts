import { Card } from "../models/Card.model";

export type CardComplementaryData = Omit<
  Card,
  | "desc"
  | "card_images"
  | "name"
  | "banlist_info"
  | "card_prices"
  | "card_sets"
  | "linkmarkers"
  | "typeline"
  | "ygoprodeck_url"
  | "id"
>;
