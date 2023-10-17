import styled from '@emotion/styled';
import {
  CharactersPresenterProps,
  ClassEngravingAreaProps,
  ServerAreaProps,
  SettingAreaProps,
  SkillAreaProps,
} from './interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { Area, Col, Row } from '@/components/commons/area';
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
  const total = props.total ? props.total : 0;

  return (
    <Area borderColor="#ffdc3c">
      <Row borderColor="white">
        <Span1>{`캐릭터 수 : ${total}`}</Span1>
      </Row>
      {props.servers?.map((v, i) => (
        <Row key={v.server}>
          <RatioBar
            label={`${i + 1}. ${v.server}`}
            max={total}
            total={total}
            value={v.count}
          />
        </Row>
      ))}
    </Area>
  );
}

function ClassEngravingArea(props: ClassEngravingAreaProps) {
  const total = props.total ? props.total : 0;

  return (
    <Area borderColor="#ffdc3c">
      <Row borderColor="white">
        <Span1>{`캐릭터 수 : ${total}`}</Span1>
      </Row>
      {props.classEngravings?.map((v, i) => (
        <Row key={v.classEngraving}>
          <RatioBar
            label={`${i + 1}. ${v.classEngraving}`}
            max={total}
            total={total}
            value={v.count}
          />
        </Row>
      ))}
    </Area>
  );
}

function SettingArea(props: SettingAreaProps) {
  const total = props.total ? props.total : 0;

  return (
    <Area borderColor="#ffdc3c">
      <Row borderColor="white">
        <Span1>{`캐릭터 수 : ${total}`}</Span1>
      </Row>
      <Row borderColor="white">
        <Col borderColor="white" style={{ marginRight: '25px' }}>
          {props.stats ? (
            <>
              <Row>
                <Span1>특성</Span1>
              </Row>
              {props.stats.map((v) => (
                <Row key={v.stat}>
                  <RatioBar
                    label={v.stat}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                </Row>
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
        <Col borderColor="white" style={{ marginRight: '25px' }}>
          {props.sets ? (
            <>
              <Row>
                <Span1>세트 효과</Span1>
              </Row>
              {props.sets.map((v) => (
                <Row key={v.set}>
                  <RatioBar
                    label={v.set}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                </Row>
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
        <Col>
          {props.elixirs ? (
            <>
              <Row>
                <Span1>엘릭서</Span1>
              </Row>
              {props.elixirs.map((v) => (
                <Row key={v.elixir}>
                  <RatioBar
                    label={v.elixir}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                </Row>
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col borderColor="white" style={{ marginRight: '25px' }}>
          {props.engravings ? (
            <>
              <Row>
                <Span1>각인</Span1>
              </Row>
              {props.engravings.map((v) => (
                <Row key={v.engraving}>
                  <RatioBar
                    label={v.engraving}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                </Row>
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
        <Col>
          {props.engravings97 ? (
            <>
              <Row>
                <Span1>각인 (97돌)</Span1>
              </Row>
              {props.engravings97.map((v) => (
                <Row key={v.engraving}>
                  <RatioBar
                    label={v.engraving}
                    max={total}
                    total={total}
                    value={v.count}
                  />
                </Row>
              ))}
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Area>
  );
}

function SkillArea(props: SkillAreaProps) {
  const total = props.total ? props.total : 0;

  return (
    <Area borderColor="#ffdc3c">
      <Row borderColor="white">
        <Span1>{`캐릭터 수 : ${total}`}</Span1>
      </Row>
      {props.skills?.map((v, i) => (
        <>
          <Row>
            <Span1>{`${i + 1}. ${v.skillName} (${(
              (v.count / total) *
              100
            ).toFixed(2)}%)`}</Span1>
          </Row>
          <Row>
            <Col
              borderColor="white"
              style={{ marginRight: '25px', width: '33%', height: '400px' }}
            >
              <Row>
                <Span1>스킬 레벨</Span1>
              </Row>
              {v.levels.map((v2) => (
                <Row>
                  <RatioBar
                    label={v2.level}
                    max={v.count}
                    total={v.count}
                    value={v2.count}
                  />
                </Row>
              ))}
            </Col>
            <Col
              borderColor="white"
              style={{ marginRight: '25px', width: '33%', height: '400px' }}
            >
              <Row>
                <Span1>트라이포드</Span1>
              </Row>
              {v.tripods.map((v2) => (
                <Row>
                  <RatioBar
                    label={v2.tripod}
                    max={v.count}
                    total={v.count}
                    value={v2.count}
                  />
                </Row>
              ))}
            </Col>
            <Col style={{ width: '33%', height: '400px' }}>
              <Row>
                <Span1>룬</Span1>
              </Row>
              {v.runes.map((v2) => (
                <Row>
                  <RatioBar
                    label={v2.rune}
                    max={v.count}
                    total={v.count}
                    value={v2.count}
                  />
                </Row>
              ))}
            </Col>
          </Row>
          <Row borderColor="white">
            <Span1>{`멸화 (${((v.myul / v.count) * 100).toFixed(2)}%)`}</Span1>
            <Span1>{`, 홍염 (${((v.hong / v.count) * 100).toFixed(
              2
            )}%)`}</Span1>
          </Row>
        </>
      ))}
    </Area>
  );
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
          <ServerArea {...props.data.servers} />
        ) : props.selectedCategory === '직업 각인' ? (
          <ClassEngravingArea {...props.data.classEngravings} />
        ) : props.selectedCategory === '세팅' ? (
          <SettingArea {...props.data.settings} />
        ) : props.selectedCategory === '스킬' ? (
          <SkillArea {...props.data.skills} />
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
