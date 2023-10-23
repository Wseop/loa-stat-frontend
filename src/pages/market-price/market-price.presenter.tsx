import styled from '@emotion/styled';
import { MarketPricePresenterProps } from '../../interfaces/market-price.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Board, Row } from '@/components/commons/board';

const TITLE_FONT_SIZE = '30px';
const CONTENT_FONT_SIZE = '25px';

const SPAN_WIDTH = '30%';

const Wrapper = styled.div`
  display: block;
  width: 75vw;
`;

export default function MarketPricePresenter(props: MarketPricePresenterProps) {
  return (
    <Wrapper>
      <Row justifyContent="center">
        {props.categories?.map((v) => (
          <MenuButton
            key={v}
            onClick={props.onClickCategory(v)}
            backgroundColor={props.category === v ? '#464646' : '#323232'}
          >
            {v}
          </MenuButton>
        ))}
      </Row>
      <Board>
        <Row justifyContent="center" borderColor={{ bottom: 'white' }}>
          <Span fontSize={TITLE_FONT_SIZE} width={SPAN_WIDTH}>
            아이템
          </Span>
          <Span fontSize={TITLE_FONT_SIZE} width={SPAN_WIDTH}>
            최저가
          </Span>
          <Span fontSize={TITLE_FONT_SIZE} width={SPAN_WIDTH}>
            갱신일
          </Span>
        </Row>
        {props.itemPrices?.map((v) => (
          <Row key={v.itemName} justifyContent="center">
            <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
              {v.itemName}
            </Span>
            <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
              {v.price.toLocaleString()}
            </Span>
            <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
              {v.updated}
            </Span>
          </Row>
        ))}
      </Board>
    </Wrapper>
  );
}
