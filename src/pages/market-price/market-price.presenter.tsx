import styled from '@emotion/styled';
import { MarketPricePresenterProps } from './interfaces/market-price.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Row, Table, TableItem } from '@/components/commons/table';
import { Fragment } from 'react';

const Wrapper = styled.div`
  display: block;
  width: 50vw;
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
      <Row backgroundColor="#323232">
        {props.categories.map((v) => (
          <MenuButton
            key={v}
            onClick={props.onClickCategory(v)}
            backgroundColor={props.category === v ? '#464646' : '#323232'}
          >
            {v}
          </MenuButton>
        ))}
      </Row>
      <Table>
        <TableItem>
          <Span1>아이템</Span1>
        </TableItem>
        <TableItem>
          <Span1>최저가</Span1>
        </TableItem>
        <TableItem>
          <Span1>갱신일</Span1>
        </TableItem>
        {props.itemPrices?.map((v) => (
          <Fragment key={v.itemName}>
            <TableItem>
              <Span2>{v.itemName}</Span2>
            </TableItem>
            <TableItem>
              <Span2>{v.price.toLocaleString()}</Span2>
            </TableItem>
            <TableItem>
              <Span2>{v.updated}</Span2>
            </TableItem>
          </Fragment>
        ))}
      </Table>
    </Wrapper>
  );
}
