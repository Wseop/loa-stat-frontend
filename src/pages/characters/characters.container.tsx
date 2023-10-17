import { useForm } from 'react-hook-form';
import CharactersPresenter from './characters.presenter';
import {
  CharacterClassEngravings,
  CharacterData,
  CharacterServers,
  CharacterSettings,
  SearchFilter,
} from './interfaces/characters.interface';
import { useState } from 'react';
import axios from 'axios';

const CATEGORIES: readonly string[] = [
  '서버',
  '직업 각인',
  '세팅',
  '스킬',
] as const;
const CLASS_ENGRAVINGS: readonly string[] = [
  '갈증',
  '강화 무기',
  '고독한 기사',
  '광기',
  '광전사의 비기',
  '그믐의 경계',
  '극의: 체술',
  '넘치는 교감',
  '달의 소리',
  '두 번째 동료',
  '만개',
  '만월의 집행자',
  '멈출 수 없는 충동',
  '버스트',
  '분노의 망치',
  '사냥의 시간',
  '상급 소환사',
  '세맥타통',
  '심판자',
  '아르데타인의 기술',
  '역천지체',
  '오의 강화',
  '오의난무',
  '완벽한 억제',
  '이슬비',
  '일격필살',
  '잔재된 기운',
  '전투 태세',
  '절실한 구원',
  '절정',
  '절제',
  '점화',
  '죽음의 습격',
  '중력 수련',
  '진실된 용맹',
  '진화의 유산',
  '질풍노도',
  '처단자',
  '초심',
  '축복의 오라',
  '충격 단련',
  '포격 강화',
  '포식자',
  '피스메이커',
  '핸드거너',
  '화력 강화',
  '환류',
  '황제의 칙령',
  '황후의 은총',
  '회귀',
] as const;

export default function CharactersContainer() {
  const [category, setCategory] = useState('서버');
  const [data, setData] = useState<CharacterData>({});

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
        // 카테고리별로 데이터 처리
        const newData: CharacterData = JSON.parse(JSON.stringify(data));
        if (category === '서버') {
          const servers: CharacterServers = result.data;
          newData.servers = {
            total: servers.total,
            servers: Object.entries(servers.server).map((v) => ({
              server: v[0],
              count: v[1],
            })),
          };
        } else if (category === '직업 각인') {
          const classEngravings: CharacterClassEngravings = result.data;
          newData.classEngravings = {
            total: classEngravings.total,
            classEngravings: Object.entries(classEngravings.classEngraving).map(
              (v) => ({
                classEngraving: v[0],
                count: v[1],
              })
            ),
          };
        } else if (category === '세팅') {
          const settings: CharacterSettings = result.data;
          newData.settings = {
            total: settings.total,
            stats: Object.entries(settings.stat)
              .map((v) => ({ stat: v[0], count: v[1] }))
              .slice(0, 3),
            sets: Object.entries(settings.set)
              .map((v) => ({ set: v[0], count: v[1] }))
              .slice(0, 3),
            elixirs: Object.entries(settings.elixir)
              .map((v) => ({ elixir: v[0], count: v[1] }))
              .slice(0, 3),
            engravings: Object.entries(settings.engraving)
              .map((v) => {
                if (!v[0].includes('[333332]')) {
                  return {
                    engraving: v[0],
                    count: v[1],
                  };
                } else {
                  return {
                    engraving: '',
                    count: 0,
                  };
                }
              })
              .filter((e) => e.count > 0)
              .slice(0, 5),
            engravings97: Object.entries(settings.engraving)
              .map((v) => {
                if (v[0].includes('[333332]')) {
                  return {
                    engraving: v[0],
                    count: v[1],
                  };
                } else {
                  return {
                    engraving: '',
                    count: 0,
                  };
                }
              })
              .filter((e) => e.count > 0)
              .slice(0, 5),
          };
        } else if (category === '스킬') {
        }
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
      categories={CATEGORIES}
      classEngravings={CLASS_ENGRAVINGS}
      selectedCategory={category}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      onClickCategory={onClickCategory}
      onClickSearch={onClickSearch}
    />
  );
}
