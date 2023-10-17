import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface CharacterData {
  servers?: ServerAreaProps;
  classEngravings?: ClassEngravingAreaProps;
  settings?: SettingAreaProps;
  skills?: SkillAreaProps;
}

export interface CharactersPresenterProps {
  categories: readonly string[];
  classEngravings: readonly string[];
  selectedCategory: string;
  data: CharacterData;
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

export interface CharacterServers {
  total: number;
  server: {
    [serverName: string]: number;
  };
}

export interface CharacterClassEngravings {
  total: number;
  classEngraving: {
    [classEngravingName: string]: number;
  };
}

export interface CharacterSettings {
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

export interface CharacterSkills {
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
  total?: number;
  servers?: {
    server: string;
    count: number;
  }[];
}

export interface ClassEngravingAreaProps {
  total?: number;
  classEngravings?: {
    classEngraving: string;
    count: number;
  }[];
}

export interface SettingAreaProps {
  total?: number;
  stats?: {
    stat: string;
    count: number;
  }[];
  sets?: {
    set: string;
    count: number;
  }[];
  elixirs?: {
    elixir: string;
    count: number;
  }[];
  engravings?: {
    engraving: string;
    count: number;
  }[];
  engravings97?: {
    engraving: string;
    count: number;
  }[];
}

export interface SkillAreaProps {}
