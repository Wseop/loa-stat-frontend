import styled from '@emotion/styled';
import { MarketPricePresenterProps } from './interfaces/market-price.interface';
import { MenuButton } from '@/components/commons/button';
import { Area, Row } from '@/components/commons/area';
import { Span } from '@/components/commons/data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span1 = styled(Span)`
  width: 33%;
  background-color: #323232;
  font-size: 30px;
`;

const Span2 = styled(Span)`
  width: 30%;
  background-color: #3c3c3c;
  font-size: 25px;
`;

export default function MarketPricePresenter(props: MarketPricePresenterProps) {
  return (
    <Wrapper>
      <Row borderColor="white">
        {props.categories.map((v) => (
          <MenuButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </MenuButton>
        ))}
      </Row>
      <Area borderColor="#ffdc3c">
        <Row backgroundColor="#323232" borderColor="white">
          <Span1>아이템</Span1>
          {props.category === '재련 재료' ||
          props.category === '에스더의 기운' ? (
            <Span1>평균 거래가</Span1>
          ) : (
            <Span1>최저가</Span1>
          )}
          <Span1>갱신일</Span1>
        </Row>
        {props.itemPrices?.map((v) => (
          <Row key={v.itemName} backgroundColor="#3c3c3c">
            <Span2>{v.itemName}</Span2>
            <Span2>{v.price.toLocaleString()}</Span2>
            <Span2>{v.updated}</Span2>
          </Row>
        ))}
      </Area>
    </Wrapper>
  );
}
