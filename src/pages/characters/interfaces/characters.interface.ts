import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type CharactersData =
  | undefined
  | CharactersServer
  | CharactersClassEngraving
  | CharactersSetting
  | CharactersSkill;

export interface CharactersPresenterProps {
  categories: string[];
  classEngravings: string[];
  selectedCategory: string;
  data: CharactersData;
  register: UseFormRegister<SearchFilter>;
  handleSubmit: UseFormHandleSubmit<SearchFilter, undefined>;
  onClickCategory: (category: string) => () => void;
  onClickSearch: (filter: SearchFilter) => void;
}

export interface SearchFilter {
  minItemLevel: number;
  maxItemLevel: number;
  classEngraving?: string;
}

export interface CharactersServer {
  total: number;
  server: {
    [serverName: string]: number;
  };
}

export interface CharactersClassEngraving {
  total: number;
  classEngraving: {
    [classEngravingName: string]: number;
  };
}

export interface CharactersSetting {
  total: number;
  stat: {
    [statName: string]: number;
  };
  set: {
    [setName: string]: number;
  };
  elixir: {
    [elixirName: string]: number;
  };
  engraving: {
    [engravingName: string]: number;
  };
}

export interface CharactersSkill {
  total: number;
  skill: {
    [skillName: string]: {
      count: number;
      level: {
        [levelKey: string]: number;
      };
      tripod: {
        [tripodName: string]: number;
      };
      rune: {
        [runeName: string]: number;
      };
      myul: number;
      hong: number;
    };
  };
}

export interface CharactersServerProps {
  charactersServer: CharactersServer;
}

export interface CharactersClassEngravingProps {
  charactersClassEngraving: CharactersClassEngraving;
}

export interface CharactersSettingProps {
  charactersSetting: CharactersSetting;
}

export interface CharactersSkillProps {
  charactersSkill: CharactersSkill;
}
