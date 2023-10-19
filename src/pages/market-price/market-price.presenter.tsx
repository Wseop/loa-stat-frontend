import styled from '@emotion/styled';
import { MarketPricePresenterProps } from './interfaces/market-price.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Row } from '@/components/commons/table';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span1 = styled(Span)`
  width: 33%;
  font-size: 30px;
`;

const Span2 = styled(Span)`
  width: 30%;
  font-size: 25px;
`;

export default function MarketPricePresenter(props: MarketPricePresenterProps) {
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
        <Row>
          <Span1>아이템</Span1>
          <Span1>최저가</Span1>
          <Span1>갱신일</Span1>
        </Row>
        {props.itemPrices?.map((v) => (
          <Row key={v.itemName}>
            <Span2>{v.itemName}</Span2>
            <Span2>{v.price.toLocaleString()}</Span2>
            <Span2>{v.updated}</Span2>
          </Row>
        ))}
      </Row>
    </Wrapper>
  );
}
