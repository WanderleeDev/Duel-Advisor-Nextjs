import { Social } from "./Social.enum";

export interface ProfileInfo {
  user: User;
  direction: string;
  lastLogin: string;
  description: string;
  decksQuantity: number;
  favoritesQuantity: number;
  social: ProfileSocial[];
}

export interface User {
  firstName: string;
  lastName: string;
  image: string;
}

export interface ProfileSocial {
  name: Social;
  link: string;
}

export type Stats = Pick<ProfileInfo, "decksQuantity" | "favoritesQuantity">;
