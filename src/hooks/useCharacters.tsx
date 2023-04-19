import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CharacterInMap } from '../types/types';

type CharacterProviderProps = {
  children: ReactNode;
  mapCharacters: CharacterInMap[];
};

const CharacterContext = createContext<{
  characters: CharacterInMap[];
  setCharacters: React.Dispatch<React.SetStateAction<CharacterInMap[]>>;
} | null>(null);

export const CharacterProvider = (props: CharacterProviderProps) => {
  const { children, mapCharacters } = props;

  const [characters, setCharacters] = useState(mapCharacters);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharacterContext);

  if (context === null || context === undefined) {
    throw new Error('useCharacters must be used within the CharacterProvider');
  }

  return context;
};
