import {
  CardDataResponse,
  CardDataResponseBy,
  ArchetypeResponse,
  CardDataSetResponse,
} from "../../data/models/CardApiResponse";

export interface CardRepository {
  getAllCards(): Promise<CardDataResponse[]>;
  getCardById<T>(query: T): Promise<CardDataResponseBy>;
  getArchetypes(): Promise<ArchetypeResponse[]>;
  getSetsCards(query: string): Promise<CardDataSetResponse>;
}
