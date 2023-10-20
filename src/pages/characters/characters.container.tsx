import CharactersPresenter from './characters.presenter';
import {
  CharacterClassEngravings,
  CharacterData,
  CharacterServers,
  CharacterSettings,
  CharacterSkills,
  SearchFilter,
} from '../../interfaces/characters.interface';
import { useState } from 'react';
import axios from 'axios';

const CATEGORIES: readonly string[] = ['서버', '직업', '세팅', '스킬'] as const;
const CLASS_ENGRAVING_MAP: {
  readonly [key: string]: string;
} = {
  갈증: '리퍼',
  '강화 무기': '데빌헌터',
  '고독한 기사': '워로드',
  광기: '버서커',
  '광전사의 비기': '버서커',
  '그믐의 경계': '소울이터',
  '극의: 체술': '인파이터',
  '넘치는 교감': '서머너',
  '달의 소리': '리퍼',
  '두 번째 동료': '호크아이',
  만개: '도화가',
  '만월의 집행자': '소울이터',
  '멈출 수 없는 충동': '데모닉',
  버스트: '블레이드',
  '분노의 망치': '디스트로이어',
  '사냥의 시간': '건슬링어',
  '상급 소환사': '서머너',
  세맥타통: '기공사',
  심판자: '홀리나이트',
  '아르데타인의 기술': '스카우터',
  역천지체: '기공사',
  '오의 강화': '배틀마스터',
  오의난무: '스트라이커',
  '완벽한 억제': '데모닉',
  이슬비: '기상술사',
  일격필살: '스트라이커',
  '잔재된 기운': '블레이드',
  '전투 태세': '워로드',
  '절실한 구원': '바드',
  절정: '창술사',
  절제: '창술사',
  점화: '소서리스',
  '죽음의 습격': '호크아이',
  '중력 수련': '디스트로이어',
  '진실된 용맹': '바드',
  '진화의 유산': '스카우터',
  질풍노도: '기상술사',
  처단자: '슬레이어',
  초심: '배틀마스터',
  '축복의 오라': '홀리나이트',
  '충격 단련': '인파이터',
  '포격 강화': '블래스터',
  포식자: '슬레이어',
  피스메이커: '건슬링어',
  핸드거너: '데빌헌터',
  '화력 강화': '블래스터',
  환류: '소서리스',
  '황제의 칙령': '아르카나',
  '황후의 은총': '아르카나',
  회귀: '도화가',
} as const;

export default function CharactersContainer() {
  const [category, setCategory] = useState<string>('서버');
  const [data, setData] = useState<CharacterData>({});

  const onClickCategory = (category: string) => () => {
    setCategory(category);
  };

  const onClickSearch = (filter: SearchFilter) => {
    let url = `${process.env.NEXT_PUBLIC_API}/characters`;
    if (category === '서버') url += '/servers';
    else if (category === '직업') url += '/classEngravings';
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
        } else if (category === '직업') {
          const classEngravings: CharacterClassEngravings = result.data;
          newData.classEngravings = {
            total: classEngravings.total,
            // 직업각인별 분류
            classEngravings: Object.entries(classEngravings.classEngraving).map(
              (v) => ({
                classEngraving: v[0],
                count: v[1],
              })
            ),
          };

          // 직업별 분류
          const classEngravingTemp: {
            [key: string]: {
              classEngraving: string;
              count: number;
            }[];
          } = {};
          newData.classEngravings?.classEngravings?.forEach((v) => {
            const className = CLASS_ENGRAVING_MAP[v.classEngraving];
            if (!Object.hasOwn(classEngravingTemp, className)) {
              classEngravingTemp[className] = [];
            }
            classEngravingTemp[className].push(v);
          });

          const classTemp: { [key: string]: number } = {};
          Object.entries(classEngravings.classEngraving).forEach((v) => {
            const className = CLASS_ENGRAVING_MAP[v[0]];
            if (!Object.hasOwn(classTemp, className)) {
              classTemp[className] = 0;
            }
            classTemp[className] += v[1];
          });
          newData.classEngravings.classes = Object.entries(classTemp).map(
            (v) => ({
              className: v[0],
              count: v[1],
              classEngravings: classEngravingTemp[v[0]],
            })
          );
          newData.classEngravings.classes.sort((a, b) => b.count - a.count);
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
          const skills: CharacterSkills = result.data;
          newData.skills = {
            total: skills.total,
            skills: Object.entries(skills.skill).map((v) => ({
              skillName: v[0],
              count: v[1].count,
              levels: Object.entries(v[1].level)
                .map((v) => ({
                  level: v[0],
                  count: v[1],
                }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 5),
              tripods: Object.entries(v[1].tripod)
                .map((v) => ({
                  tripod: v[0],
                  count: v[1],
                }))
                .slice(0, 5),
              runes: Object.entries(v[1].rune)
                .map((v) => ({
                  rune: v[0],
                  count: v[1],
                }))
                .slice(0, 5),
              myul: v[1].myul,
              hong: v[1].hong,
            })),
          };
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
      classEngravings={Object.keys(CLASS_ENGRAVING_MAP)}
      selectedCategory={category}
      data={data}
      onClickCategory={onClickCategory}
      onClickSearch={onClickSearch}
    />
  );
}
