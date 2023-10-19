import styled from '@emotion/styled';
import {
  CharactersPresenterProps,
  ClassEngravingTableProps,
  ServerTableProps,
  SettingTableProps,
  SkillTableProps,
} from './interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { Label, RatioBar, Span } from '@/components/commons/data';
import { Col, Row, Table, TableItem } from '@/components/commons/table';
import { useState } from 'react';

const Wrapper = styled.div`
  display: block;
  width: 75vw;
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

function ServerTable(props: ServerTableProps) {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <Row borderColor={{ bottom: 'white' }}>
          <Span1>{`캐릭터 수 : ${total.toLocaleString()}`}</Span1>
        </Row>
      ) : (
        <></>
      )}
      <Table>
        {props.servers?.map((v, i) => (
          <TableItem key={v.server}>
            <RatioBar
              key={v.server}
              label={`${i + 1}. ${v.server}`}
              max={total}
              total={total}
              value={v.count}
            />
          </TableItem>
        ))}
      </Table>
    </Wrapper>
  );
}

function ClassEngravingTable(props: ClassEngravingTableProps) {
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
          <Row backgroundColor="#323232">
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
          <Row borderColor={{ bottom: 'white' }}>
            <Span1>{`캐릭터 수 : ${total.toLocaleString()}`}</Span1>
          </Row>

          {type === 1 ? (
            <>
              <Table>
                {props.classEngravings?.map((v, i) => (
                  <TableItem key={v.classEngraving}>
                    <RatioBar
                      label={`${i + 1}. ${v.classEngraving}`}
                      max={total}
                      total={total}
                      value={v.count}
                    />
                  </TableItem>
                ))}
              </Table>
            </>
          ) : (
            <>
              {props.classes?.map((v, i) => (
                <Row key={v.className} borderColor={{ bottom: 'white' }}>
                  <Row>
                    <Col
                      borderColor={{ right: 'white' }}
                      style={{ marginRight: '10px' }}
                    >
                      <RatioBar
                        label={`${i + 1}. ${v.className}`}
                        max={total}
                        total={total}
                        value={v.count}
                      />
                    </Col>
                  </Row>
                  <Row>
                    {v.classEngravings.map((v2) => (
                      <Col style={{ marginRight: '20px' }}>
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
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}

function SettingTable(props: SettingTableProps) {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <Row borderColor={{ bottom: 'white' }}>
          <Span1>{`캐릭터 수 : ${total}`}</Span1>
        </Row>
      ) : (
        <></>
      )}
      <Row borderColor={{ bottom: 'white' }}>
        <Col borderColor={{ right: 'white' }} style={{ marginRight: '25px' }}>
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
        <Col borderColor={{ right: 'white' }} style={{ marginRight: '25px' }}>
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
        <Col borderColor={{ right: 'white' }} style={{ marginRight: '25px' }}>
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
    </Wrapper>
  );
}

function SkillTable(props: SkillTableProps) {
  const total = props.total ? props.total : 0;

  return (
    <Wrapper>
      {total ? (
        <Row borderColor={{ bottom: 'white' }}>
          <Span1>{`캐릭터 수 : ${total}`}</Span1>
        </Row>
      ) : (
        <></>
      )}
      {props.skills?.map((v, i) => (
        <Row borderColor={{ bottom: 'white' }}>
          <Col style={{ width: '20%' }}>
            <RatioBar
              label={`${i + 1}. ${v.skillName}`}
              max={total}
              total={total}
              value={v.count}
            />
          </Col>
          <Col
            borderColor={{ left: 'white', right: 'white' }}
            style={{ width: '20%', height: '400px' }}
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
            borderColor={{ right: 'white' }}
            style={{ width: '20%', height: '400px' }}
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
          <Col
            borderColor={{ right: 'white' }}
            style={{ width: '20%', height: '400px' }}
          >
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
          <Col style={{ width: '20%', height: '400px' }}>
            <Row>
              <Span1>보석</Span1>
            </Row>
            <Row>
              <RatioBar
                label="멸화"
                max={v.count}
                total={v.count}
                value={v.myul}
              />
            </Row>
            <Row>
              <RatioBar
                label="홍염"
                max={v.count}
                total={v.count}
                value={v.hong}
              />
            </Row>
          </Col>
        </Row>
      ))}
    </Wrapper>
  );
}

export default function CharactersPresenter(props: CharactersPresenterProps) {
  return (
    <Wrapper>
      <Row backgroundColor="#323232">
        {props.categories.map((v) => (
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
      <Row borderColor={{ bottom: 'white' }}>
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
          <Row>
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
