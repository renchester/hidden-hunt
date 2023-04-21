import type { Timestamp } from 'firebase/firestore';

export interface Character {
  id: string;
  name: string;
  img: string;
  isGnome?: boolean;
}

export interface CharacterInMap extends Character {
  isFound: boolean;
}

export interface Map {
  id: string;
  type: MapType;
  title: string;
  imgSource: string;
  creator: string;
  creatorLink: string;
  difficulty: string;
  instructions: string;
  characters: Character[];
  previewCharacters?: Character[];
}

export interface Coordinates {
  x: number;
  y: number;
}

export type MapType = 'space' | 'street' | 'party';

export interface CharacterPopupData {
  isFound: boolean;
  character: CharacterInMap | null;
}

export interface GnomeCoords {
  id: string;
  x: number;
  y: number;
  isGnome: boolean;
}

export interface TimeLapsed {
  actualTime: number;
  hours: number;
  minutes: number;
  seconds: number;
  centiseconds: number;
}

export interface LeaderboardData {
  timeLapsed: number;
  name: string;
  dateCreated: Timestamp;
}
