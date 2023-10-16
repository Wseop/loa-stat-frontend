import styled from '@emotion/styled';
import { MarketPricePresenterProps } from './interfaces/market-price.interface';
import { NaviButton } from '@/components/commons/buttons/navi-button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryNavi = styled.div`
  display: flex;
  justify-content: center;
`;

const MarketPriceTable = styled.div`
  display: block;
  width: 100vh;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
`;

const MarketPriceRow1 = styled.div`
  display: flex;
  background-color: #323232;
  justify-content: center;
  border-top: 1px solid white;
  border-bottom: 1px inset white;
`;

const MarketPriceRow2 = styled.div`
  display: flex;
  background-color: #3c3c3c;
  justify-content: center;
  border-bottom: 1px inset white;
`;

const MarketPriceSpan1 = styled.div`
  margin: 5px;
  width: 33%;
  background-color: #323232;
  text-align: center;
  font-size: 30px;
`;

const MarketPriceSpan2 = styled.div`
  margin: 5px;
  width: 30%;
  background-color: #3c3c3c;
  text-align: center;
  font-size: 25px;
`;

export default function MarketPricePresenter(props: MarketPricePresenterProps) {
  return (
    <Wrapper>
      <CategoryNavi>
        {props.categories.map((v) => (
          <NaviButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </NaviButton>
        ))}
      </CategoryNavi>
      <MarketPriceTable>
        <MarketPriceRow1>
          <MarketPriceSpan1>아이템</MarketPriceSpan1>
          <MarketPriceSpan1>최저가 / 평균 거래가</MarketPriceSpan1>
          <MarketPriceSpan1>마지막 업데이트</MarketPriceSpan1>
        </MarketPriceRow1>
        {props.itemPrices?.map((v) => (
          <MarketPriceRow2 key={v.itemName}>
            <MarketPriceSpan2>{v.itemName}</MarketPriceSpan2>
            <MarketPriceSpan2>{v.price.toLocaleString()}</MarketPriceSpan2>
            <MarketPriceSpan2>{v.updated}</MarketPriceSpan2>
          </MarketPriceRow2>
        ))}
      </MarketPriceTable>
    </Wrapper>
  );
}
