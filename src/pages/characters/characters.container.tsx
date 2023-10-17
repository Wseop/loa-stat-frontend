import { useForm } from 'react-hook-form';
import CharactersPresenter from './characters.presenter';
import {
  CharactersData,
  CharactersServer,
  SearchFilter,
} from './interfaces/characters.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ['서버', '직업 각인', '세팅', '스킬'];
const classEngravings = [
  '피스메이커',
  '사냥의 시간',
  '세맥타통',
  '역천지체',
  '질풍노도',
  '이슬비',
  '완벽한 억제',
  '멈출 수 없는 충동',
  '강화 무기',
  '핸드거너',
  '회귀',
  '만개',
  '분노의 망치',
  '중력 수련',
  '갈증',
  '달의 소리',
  '진실된 용맹',
  '절실한 구원',
  '오의 강화',
  '초심',
  '광기',
  '광전사의 비기',
  '화력 강화',
  '포격 강화',
  '잔재된 기운',
  '버스트',
  '상급 소환사',
  '넘치는 교감',
  '점화',
  '환류',
  '만월의 집행자',
  '그믐의 경계',
  '아르데타인의 기술',
  '진화의 유산',
  '일격필살',
  '오의난무',
  '포식자',
  '처단자',
  '황후의 은총',
  '황제의 칙령',
  '전투 태세',
  '고독한 기사',
  '극의: 체술',
  '충격 단련',
  '절정',
  '절제',
  '두 번째 동료',
  '죽음의 습격',
  '심판자',
  '축복의 오라',
];

export default function CharactersContainer() {
  const [category, setCategory] = useState('서버');
  const [data, setData] = useState<CharactersData>({});

  const { register, handleSubmit } = useForm<SearchFilter>();

  const onClickCategory = (category: string) => () => {
    setCategory(category);
  };

  const onClickSearch = (filter: SearchFilter) => {
    let url = `${process.env.NEXT_PUBLIC_API}/characters`;
    if (category === '서버') url += '/servers';
    else if (category === '직업 각인') url += '/classEngravings';
    else if (category === '세팅') url += `/settings/${filter.classEngraving}`;
    else if (category === '스킬') url += `/skills/${filter.classEngraving}`;
    url += `?minItemLevel=${filter.minItemLevel}&maxItemLevel=${filter.maxItemLevel}`;

    axios
      .get(url)
      .then((result) => {
        const newData: CharactersData = JSON.parse(JSON.stringify(data));
        if (category === '서버') newData.server = result.data;
        else if (category === '직업 각인') newData.classEngraving = result.data;
        else if (category === '세팅') newData.setting = result.data;
        else if (category === '스킬') newData.skill = result.data;
        setData(newData);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  };

  return (
    <CharactersPresenter
      categories={categories}
      classEngravings={classEngravings.sort()}
      selectedCategory={category}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      onClickCategory={onClickCategory}
      onClickSearch={onClickSearch}
    />
  );
}
