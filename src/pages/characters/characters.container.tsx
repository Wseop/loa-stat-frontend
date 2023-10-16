import { useForm } from 'react-hook-form';
import CharactersPresenter from './characters.presenter';
import {
  CharactersServer,
  ItemLevelFilter,
} from './interfaces/characters.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ['서버', '직업 각인', '세팅', '스킬'];

export default function CharactersContainer() {
  const [category, setCategory] = useState('서버');
  const [characters, setCharacters] = useState<CharactersServer>();

  const { register, handleSubmit } = useForm<ItemLevelFilter>();

  const onClickCategory = (category: string) => () => {
    setCategory(category);
  };

  const onClickSearch = (filter: ItemLevelFilter) => {
    let url = `${process.env.NEXT_PUBLIC_API}/characters`;

    if (category === '서버') {
      axios
        .get(
          `${url}/servers?minItemLevel=${filter.minItemLevel}&maxItemLevel=${filter.maxItemLevel}`
        )
        .then((result) => {
          setCharacters(result.data);
        })
        .catch((error) => {
          if (error.response) console.log(error.response.status);
          else if (error.request) console.log(error.request);
          else console.log(error.message);
        });
    }
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/characters/servers?minItemLevel=1620&maxItemLevel=1655`
      )
      .then((result) => {
        setCharacters(result.data);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  }, []);

  return (
    <CharactersPresenter
      categories={categories}
      characters={characters}
      register={register}
      handleSubmit={handleSubmit}
      onClickCategory={onClickCategory}
      onClickSearch={onClickSearch}
    />
  );
}
