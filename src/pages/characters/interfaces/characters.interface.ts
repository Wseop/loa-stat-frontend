import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface CharactersData {
  server?: CharactersServer;
  classEngraving?: CharactersClassEngraving;
  setting?: CharactersSetting;
  skill?: CharactersSkill;
}

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

export interface ServerAreaProps {
  charactersServer: CharactersServer | undefined;
}

export interface ClassEngravingAreaProps {
  charactersClassEngraving: CharactersClassEngraving | undefined;
}

export interface SettingAreaProps {
  charactersSetting: CharactersSetting | undefined;
}

export interface SkillAreaProps {
  charactersSkill: CharactersSkill | undefined;
}
