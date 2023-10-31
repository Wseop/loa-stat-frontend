import styled from '@emotion/styled';
import {
  CharactersPresenterProps,
  ClassEngravingTableProps,
  SearchFilter,
  ServerTableProps,
  SettingTableProps,
  SkillTableProps,
} from '../../interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { RatioBar, Span } from '@/components/commons/data';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Board, Col, Row } from '@/components/commons/board';

const TITLE_FONT_SIZE = '20px';
const CONTENT_FONT_SIZE = '15px';
const BG_COLOR_MAIN = '#282828';

const Wrapper = styled.div`
  display: block;
  width: 1440px;
`;

const ItemLevelInput = styled.input`
  font-size: 20px;
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
`;

const ClassEngravingSelect = styled.select`
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 20px;
  margin: 5px;
  margin-left: 20px;
  cursor: pointer;
  :hover {
    background-color: #3c3c3c;
  }
`;

const ServerTable = (props: ServerTableProps) => {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <>
          <Board>
            <Row>
              <Span
                fontSize={CONTENT_FONT_SIZE}
              >{`캐릭터 수 : ${total.toLocaleString()}`}</Span>
            </Row>
          </Board>
          <Board>
            <Row>
              {props.servers?.map((v, i) => (
                <RatioBar
                  key={v.server}
                  label={`${i + 1}. ${v.server}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const ClassEngravingTable = (props: ClassEngravingTableProps) => {
  const types = ['직업별', '직업각인별'];
  const total = props.total ? props.total : 0;
  const [type, setType] = useState<number>(0);

  const onClickType = (type: number) => () => {
    setType(type);
  };

  return (
    <Wrapper>
      {total ? (
        <>
          <Row justifyContent="center">
            {types.map((v, i) => (
              <MenuButton
                key={v}
                onClick={onClickType(i)}
                backgroundColor={type === i ? '#464646' : '#323232'}
              >
                {v}
              </MenuButton>
            ))}
          </Row>
          <Board>
            <Row>
              <Span
                fontSize={CONTENT_FONT_SIZE}
              >{`캐릭터 수 : ${total.toLocaleString()}`}</Span>
            </Row>
          </Board>
          {type === 0 ? (
            <Board>
              {props.classes?.map((v, i) => (
                <Row key={v.className} borderColor={{ bottom: 'white' }}>
                  <Row>
                    <Col borderColor={{ right: 'white' }}>
                      <RatioBar
                        label={`${i + 1}. ${v.className}`}
                        max={total}
                        total={total}
                        value={v.count}
                      />
                    </Col>
                  </Row>
                  <Row>
                    {v.classEngravings?.map((v2) => (
                      <Col key={v2.classEngraving}>
                        <RatioBar
                          label={v2.classEngraving}
                          max={v.count}
                          total={v.count}
                          value={v2.count}
                        />
                      </Col>
                    ))}
                  </Row>
                </Row>
              ))}
            </Board>
          ) : (
            <Board>
              <Row>
                {props.classEngravings?.map((v, i) => (
                  <RatioBar
                    key={v.classEngraving}
                    label={`${i + 1}. ${v.classEngraving}`}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                ))}
              </Row>
            </Board>
          )}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const SettingTable = (props: SettingTableProps) => {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <>
          <Board>
            <Row>
              <Span fontSize={CONTENT_FONT_SIZE}>{`캐릭터 수 : ${total}`}</Span>
            </Row>
          </Board>
          <Board>
            <Row borderColor={{ bottom: 'white' }}>
              <Span fontSize={TITLE_FONT_SIZE}>특성</Span>
            </Row>
            <Row>
              {props.stats?.map((v, i) => (
                <RatioBar
                  key={v.stat}
                  label={`${i + 1}. ${v.stat}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
          <Board>
            <Row borderColor={{ bottom: 'white' }}>
              <Span fontSize={TITLE_FONT_SIZE}>세트 효과</Span>
            </Row>
            <Row>
              {props.sets?.map((v, i) => (
                <RatioBar
                  key={v.set}
                  label={`${i + 1}. ${v.set}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
          <Board>
            <Row borderColor={{ bottom: 'white' }}>
              <Span fontSize={TITLE_FONT_SIZE}>각인</Span>
            </Row>
            <Row>
              {props.engravings?.map((v, i) => (
                <RatioBar
                  key={v.engraving}
                  label={`${i + 1}. ${v.engraving}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
          <Board>
            <Row borderColor={{ bottom: 'white' }}>
              <Span fontSize={TITLE_FONT_SIZE}>각인 (97돌)</Span>
            </Row>
            <Row>
              {props.engravings97?.map((v, i) => (
                <RatioBar
                  key={v.engraving}
                  label={`${i + 1}. ${v.engraving}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
          <Board>
            <Row borderColor={{ bottom: 'white' }}>
              <Span fontSize={TITLE_FONT_SIZE}>엘릭서</Span>
            </Row>
            <Row>
              {props.elixirs?.map((v, i) => (
                <RatioBar
                  key={v.elixir}
                  label={`${i + 1}. ${v.elixir}`}
                  max={total}
                  total={total}
                  value={v.count}
                />
              ))}
            </Row>
          </Board>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const SkillTable = (props: SkillTableProps) => {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <Board>
          <Row>
            <Span fontSize={CONTENT_FONT_SIZE}>{`캐릭터 수 : ${total}`}</Span>
          </Row>
        </Board>
      ) : (
        <></>
      )}
      {props.skills?.map((v, i) => (
        <Board key={v.skillName}>
          <Row>
            <Col borderColor={{ right: 'white' }}>
              <RatioBar
                label={`${i + 1}. ${v.skillName}`}
                max={total}
                total={total}
                value={v.count}
              />
            </Col>
            <RatioBar
              label="멸화"
              max={v.count}
              total={v.count}
              value={v.myul}
            />
            <RatioBar
              label="홍염"
              max={v.count}
              total={v.count}
              value={v.hong}
            />
          </Row>
          <Row borderColor={{ bottom: 'white' }}>
            <Span fontSize={CONTENT_FONT_SIZE}>스킬 레벨</Span>
          </Row>
          <Row>
            {v.levels?.map((v2) => (
              <RatioBar
                key={v2.level}
                label={v2.level}
                max={v.count}
                total={v.count}
                value={v2.count}
              />
            ))}
          </Row>
          <Row borderColor={{ bottom: 'white' }}>
            <Span fontSize={CONTENT_FONT_SIZE}>트라이포드</Span>
          </Row>
          <Row>
            {v.tripods?.map((v2, i) => (
              <RatioBar
                key={v2.tripod}
                label={`${i + 1}. ${v2.tripod}`}
                max={v.count}
                total={v.count}
                value={v2.count}
              />
            ))}
          </Row>
          <Row borderColor={{ bottom: 'white' }}>
            <Span fontSize={CONTENT_FONT_SIZE}>룬</Span>
          </Row>
          <Row>
            {v.runes?.map((v2, i) => (
              <RatioBar
                key={v2.rune}
                label={`${i + 1}. ${v2.rune}`}
                max={v.count}
                total={v.count}
                value={v2.count}
              />
            ))}
          </Row>
        </Board>
      ))}
    </Wrapper>
  );
};

export default function CharactersPresenter(props: CharactersPresenterProps) {
  const { register, handleSubmit } = useForm<SearchFilter>();

  return (
    <Wrapper>
      <Row justifyContent="center">
        {props.categories?.map((v) => (
          <MenuButton
            key={v}
            backgroundColor={
              props.selectedCategory === v ? '#464646' : '#323232'
            }
            onClick={props.onClickCategory(v)}
          >
            {v}
          </MenuButton>
        ))}
      </Row>
      <Row backgroundColor={BG_COLOR_MAIN} justifyContent="center">
        <form onSubmit={handleSubmit(props.onClickSearch)}>
          {props.selectedCategory === '세팅' ||
          props.selectedCategory === '스킬' ? (
            <Row backgroundColor={BG_COLOR_MAIN}>
              <Span fontSize={TITLE_FONT_SIZE} backgroundColor={BG_COLOR_MAIN}>
                직업 각인 선택
              </Span>
              <ClassEngravingSelect {...register('classEngraving')}>
                {props.classEngravings?.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </ClassEngravingSelect>
            </Row>
          ) : (
            <></>
          )}
          <Row backgroundColor={BG_COLOR_MAIN} alignItems="center">
            <Span fontSize={TITLE_FONT_SIZE} backgroundColor={BG_COLOR_MAIN}>
              아이템 레벨
            </Span>
            <ItemLevelInput
              type="number"
              min={1620}
              max={1655}
              defaultValue={1620}
              {...register('minItemLevel')}
            />
            <Span backgroundColor={BG_COLOR_MAIN}>~</Span>
            <ItemLevelInput
              type="number"
              min={1620}
              max={1655}
              defaultValue={1655}
              {...register('maxItemLevel')}
            />
            <SearchButton type="submit">검색</SearchButton>
          </Row>
        </form>
      </Row>
      {props.data ? (
        props.selectedCategory === '서버' ? (
          <ServerTable {...props.data.servers} />
        ) : props.selectedCategory === '직업' ? (
          <ClassEngravingTable {...props.data.classEngravings} />
        ) : props.selectedCategory === '세팅' ? (
          <SettingTable {...props.data.settings} />
        ) : props.selectedCategory === '스킬' ? (
          <SkillTable {...props.data.skills} />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
