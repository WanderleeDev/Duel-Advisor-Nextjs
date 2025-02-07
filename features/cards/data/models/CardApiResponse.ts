import { Card, Meta } from "../../domain/models/Card.model";
import { Archetype } from "../../domain/types/Archetypes";

// When we get all the cards
export interface CardDataResponse {
  data: Card[];
}

// When we get sets cards
export interface CardDataSetResponse {
  data: Card[];
  meta: Meta;
}

// When we get an error
export interface CardErrorResponse {
  error: string;
}

// When we get a card by
export type CardDataResponseBy = CardDataResponse;

//  When we get all the archetypes
export type ArchetypeResponse = Archetype[];
