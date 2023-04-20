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
  type: string;
  title: string;
  imgSource: string;
  creator: string;
  creatorLink: string;
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
