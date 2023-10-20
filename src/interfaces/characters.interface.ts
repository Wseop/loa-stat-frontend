import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface CharacterData {
  servers?: ServerTableProps;
  classEngravings?: ClassEngravingTableProps;
  settings?: SettingTableProps;
  skills?: SkillTableProps;
}

export interface CharactersPresenterProps {
  categories: readonly string[];
  classEngravings: readonly string[];
  selectedCategory: string;
  data: CharacterData;
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

export interface ServerTableProps {
  total?: number;
  servers?: {
    server: string;
    count: number;
  }[];
}

export interface ClassEngravingTableProps {
  total?: number;
  classEngravings?: {
    classEngraving: string;
    count: number;
  }[];
  classes?: {
    className: string;
    count: number;
    classEngravings: {
      classEngraving: string;
      count: number;
    }[];
  }[];
}

export interface SettingTableProps {
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

export interface SkillTableProps {
  total?: number;
  skills?: {
    skillName: string;
    count: number;
    levels: {
      level: string;
      count: number;
    }[];
    tripods: {
      tripod: string;
      count: number;
    }[];
    runes: {
      rune: string;
      count: number;
    }[];
    myul: number;
    hong: number;
  }[];
}
