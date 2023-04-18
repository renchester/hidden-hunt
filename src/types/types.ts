export type Character = {
  id: string;
  name: string;
  img: string;
  isGnome?: boolean;
};

export type Map = {
  id: string;
  type: string;
  title: string;
  imgSource: string;
  creator: string;
  creatorLink: string;
  instructions: string;
  characters: Character[];
  previewCharacters?: Character[];
};
