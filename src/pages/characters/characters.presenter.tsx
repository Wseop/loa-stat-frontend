import styled from '@emotion/styled';
import {
  CharactersPresenterProps,
  CharactersServer,
} from './interfaces/characters.interface';
import { NaviButton } from '@/components/commons/buttons/navi-button';

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

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Span = styled.span`
  font-size: 30px;
  margin: 5px;
`;

const ApplyButton = styled.button`
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 20px;
  width: 100px;
  margin: 5px;
  cursor: pointer;
  :hover {
    background-color: #3c3c3c;
  }
`;

const Table = styled.div`
  background-color: #323232;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 100vh;
  margin-bottom: 30px;
`;

export default function CharactersPresenter(props: CharactersPresenterProps) {
  return (
    <Wrapper>
      <Row>
        {props.categories.map((v) => (
          <NaviButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </NaviButton>
        ))}
      </Row>
      <Row>
        <form onSubmit={props.handleSubmit(props.onClickSearch)}>
          <Span>아이템 레벨</Span>
          <ItemLevelInput
            type="number"
            min={1620}
            max={1655}
            defaultValue={1620}
            {...props.register('minItemLevel')}
          />
          <Span>~</Span>
          <ItemLevelInput
            type="number"
            min={1620}
            max={1655}
            defaultValue={1655}
            {...props.register('maxItemLevel')}
          />
          <ApplyButton type="submit">검색</ApplyButton>
        </form>
      </Row>
      <Table>
        <Row>
          <Span>{`캐릭터 수 : ${props.characters?.total}`}</Span>
        </Row>
        {Object.entries((props.characters as CharactersServer).server).map(
          (v) => (
            <Row>
              <Span>{`${v[0]} : ${v[1]} (${(
                (v[1] / (props.characters as CharactersServer).total) *
                100
              ).toFixed(2)}%)`}</Span>
            </Row>
          )
        )}
      </Table>
    </Wrapper>
  );
}
