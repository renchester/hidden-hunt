export type Character = {
  id: string;
  name: string;
  img: string;
  xCoordinates: string;
  yCoordinates: string;
};

export type Map = {
  id: string;
  type: string;
  title: string;
  imgSource: string;
  creator: string;
  instructions: string;
  characters: Character[];
  previewCharacters?: Character[];
};
