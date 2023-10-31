import styled from '@emotion/styled';
import {
  MarketPricePresenterProps,
  TripodSearchFilter,
} from '../../interfaces/market-price.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Board, Row } from '@/components/commons/board';
import { useForm } from 'react-hook-form';
import { ItemGradeColor } from '@/styles/color';

const TITLE_FONT_SIZE = '20px';
const CONTENT_FONT_SIZE = '15px';

const SPAN_WIDTH = '30%';

const CLASSES = [
  '버서커',
  '디스트로이어',
  '워로드',
  '홀리나이트',
  '슬레이어',
  '배틀마스터',
  '인파이터',
  '기공사',
  '창술사',
  '스트라이커',
  '블레이드',
  '데모닉',
  '리퍼',
  '소울이터',
  '호크아이',
  '데빌헌터',
  '블래스터',
  '스카우터',
  '건슬링어',
  '아르카나',
  '서머너',
  '바드',
  '소서리스',
  '도화가',
  '기상술사',
];

const Wrapper = styled.div`
  display: block;
  width: 1440px;
`;

const ClassSelect = styled.select`
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

export default function MarketPricePresenter(props: MarketPricePresenterProps) {
  const { register, handleSubmit } = useForm<TripodSearchFilter>();

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
      {props.category === '트라이포드' ? (
        <Row justifyContent="center">
          <form
            onSubmit={handleSubmit(props.onClickTripodSearch)}
            style={{ backgroundColor: '#323232' }}
          >
            <Span fontSize={TITLE_FONT_SIZE}>직업 선택</Span>
            <ClassSelect {...register('className')}>
              {CLASSES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </ClassSelect>
            <SearchButton type="submit">검색</SearchButton>
          </form>
        </Row>
      ) : (
        <></>
      )}
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
        {props.category === '트라이포드'
          ? props.tripodPrices?.map((v, i) => (
              <Row
                key={i}
                justifyContent="center"
                alignItems="center"
                borderColor={{ bottom: 'white' }}
              >
                <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                  {`[${v.skillName}]`}
                  <br />
                  {`${v.tripodName} Lv.5`}
                </Span>
                <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                  {v.price.toLocaleString()}
                </Span>
                <Span fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                  {v.updated}
                </Span>
              </Row>
            ))
          : props.itemPrices?.map((v) => (
              <Row
                key={v.itemName}
                justifyContent="center"
                alignItems="center"
                borderColor={{ bottom: 'white' }}
              >
                <Span
                  fontSize={CONTENT_FONT_SIZE}
                  color={ItemGradeColor[v.itemGrade]}
                  width={SPAN_WIDTH}
                >
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
