import styled from '@emotion/styled';
import {
  CharactersClassEngraving,
  CharactersPresenterProps,
  CharactersServer,
  CharactersSetting,
  CharactersSkill,
} from './interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { Row } from '@/components/commons/area';
import { Span } from '@/components/commons/label';
import CharactersServerBoard from './server';
import CharactersClassEngravingBoard from './class-engraving';
import CharactersSettingBoard from './setting';
import CharactersSkillBoard from './skill';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemLevelInput = styled.input`
  font-size: 20px;
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
`;

const Span1 = styled(Span)`
  font-size: 30px;
`;

const ClassEngravingSelect = styled.select`
  margin: 10px;
  font-size: 25px;
  text-align: center;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 25px;
  margin: 5px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    background-color: #3c3c3c;
  }
`;

export default function CharactersPresenter(props: CharactersPresenterProps) {
  return (
    <Wrapper>
      <Row borderColor="white">
        {props.categories.map((v) => (
          <MenuButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </MenuButton>
        ))}
      </Row>
      <form onSubmit={props.handleSubmit(props.onClickSearch)}>
        {props.selectedCategory === '세팅' ||
        props.selectedCategory === '스킬' ? (
          <Row>
            <Span1>직업 각인 선택</Span1>
            <ClassEngravingSelect {...props.register('classEngraving')}>
              {props.classEngravings.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </ClassEngravingSelect>
          </Row>
        ) : (
          <></>
        )}
        <Row borderColor="white">
          <Span1>아이템 레벨</Span1>
          <ItemLevelInput
            type="number"
            min={1620}
            max={1655}
            defaultValue={1620}
            {...props.register('minItemLevel')}
          />
          <Span1>~</Span1>
          <ItemLevelInput
            type="number"
            min={1620}
            max={1655}
            defaultValue={1655}
            {...props.register('maxItemLevel')}
          />
          <SearchButton type="submit">검색</SearchButton>
        </Row>
      </form>
      {props.data ? (
        props.selectedCategory === '서버' ? (
          <CharactersServerBoard
            charactersServer={props.data as CharactersServer}
          />
        ) : props.selectedCategory === '직업 각인' ? (
          <CharactersClassEngravingBoard
            charactersClassEngraving={props.data as CharactersClassEngraving}
          />
        ) : props.selectedCategory === '세팅' ? (
          <CharactersSettingBoard
            charactersSetting={props.data as CharactersSetting}
          />
        ) : props.selectedCategory === '스킬' ? (
          <CharactersSkillBoard
            charactersSkill={props.data as CharactersSkill}
          />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
