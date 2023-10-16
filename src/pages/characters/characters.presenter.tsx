import styled from '@emotion/styled';
import { CharactersPresenterProps } from './interfaces/characters.interface';
import { MenuButton } from '@/components/commons/button';
import { Board, Row } from '@/components/commons/area';
import { Span } from '@/components/commons/label';

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

const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 20px;
  margin: 5px;
  cursor: pointer;
  :hover {
    background-color: #3c3c3c;
  }
`;

export default function CharactersPresenter(props: CharactersPresenterProps) {
  return (
    <Wrapper>
      <Row>
        {props.categories.map((v) => (
          <MenuButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </MenuButton>
        ))}
      </Row>
      <Row>
        <form onSubmit={props.handleSubmit(props.onClickSearch)}>
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
        </form>
      </Row>
      <Board>
        <Row>
          <Span1>{`캐릭터 수 : ${props.characters?.total}`}</Span1>
        </Row>
      </Board>
    </Wrapper>
  );
}
