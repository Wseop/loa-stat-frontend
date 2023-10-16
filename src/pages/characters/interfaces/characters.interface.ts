import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

type Characters = undefined | CharactersServer;

export interface CharactersPresenterProps {
  categories: string[];
  characters: Characters;
  register: UseFormRegister<ItemLevelFilter>;
  handleSubmit: UseFormHandleSubmit<ItemLevelFilter, undefined>;
  onClickCategory: (category: string) => () => void;
  onClickSearch: (filter: ItemLevelFilter) => void;
}

export interface ItemLevelFilter {
  minItemLevel: number;
  maxItemLevel: number;
}

export interface CharactersServer {
  total: number;
  server: {
    [serverName: string]: number;
  };
}
