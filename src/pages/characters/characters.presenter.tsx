import styled from '@emotion/styled';
import {
  CharactersPresenterProps,
  ClassEngravingAreaProps,
  ServerAreaProps,
  SettingAreaProps,
  SkillAreaProps,
} from './interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { Area, Row } from '@/components/commons/area';
import { RatioBar, Span } from '@/components/commons/data';

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

function ServerArea(props: ServerAreaProps) {
  const max = props.charactersServer?.server
    ? Object.entries(props.charactersServer.server)[0][1]
    : 0;
  const total = props.charactersServer?.total
    ? props.charactersServer.total
    : 0;

  return (
    <Area borderColor="#ffdc3c">
      {props.charactersServer ? (
        <>
          <Row borderColor="white">
            <Span1>{`캐릭터 수 : ${total}`}</Span1>
          </Row>
          {props.charactersServer?.server ? (
            Object.entries(props.charactersServer.server).map((v) => (
              <Row key={v[0]}>
                <RatioBar label={v[0]} max={max} total={total} value={v[1]} />
              </Row>
            ))
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Area>
  );
}

function ClassEngravingArea(props: ClassEngravingAreaProps) {
  const max = props.charactersClassEngraving?.classEngraving
    ? Object.entries(props.charactersClassEngraving.classEngraving)[0][1]
    : 0;
  const total = props.charactersClassEngraving?.total
    ? props.charactersClassEngraving.total
    : 0;

  return (
    <Area borderColor="#ffdc3c">
      {props.charactersClassEngraving ? (
        <>
          <Row borderColor="white">
            <Span1>{`캐릭터 수 : ${total}`}</Span1>
          </Row>
          {props.charactersClassEngraving?.classEngraving ? (
            Object.entries(props.charactersClassEngraving.classEngraving).map(
              (v) => (
                <Row key={v[0]}>
                  <RatioBar label={v[0]} max={max} total={total} value={v[1]} />
                </Row>
              )
            )
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Area>
  );
}

function SettingArea(props: SettingAreaProps) {
  const total = props.charactersSetting?.total
    ? props.charactersSetting.total
    : 0;
  return <></>;
}

function SkillArea(props: SkillAreaProps) {
  const total = props.charactersSkill?.total ? props.charactersSkill.total : 0;
  return <></>;
}

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
          <ServerArea charactersServer={props.data.server} />
        ) : props.selectedCategory === '직업 각인' ? (
          <ClassEngravingArea
            charactersClassEngraving={props.data.classEngraving}
          />
        ) : props.selectedCategory === '세팅' ? (
          <SettingArea charactersSetting={props.data.setting} />
        ) : props.selectedCategory === '스킬' ? (
          <SkillArea charactersSkill={props.data.skill} />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
