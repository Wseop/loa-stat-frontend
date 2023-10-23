import styled from '@emotion/styled';
import { RewardsPresenterProps } from '../../interfaces/reward.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Board, Row } from '@/components/commons/board';

const TITLE_FONT_SIZE = '30px';
const CONTENT_FONT_SIZE = '25px';

const SPAN_WIDTH = '115px';

const Wrapper = styled.div`
  display: block;
  width: 75vw;
`;

export default function RewardsPresenter(props: RewardsPresenterProps) {
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
      {props.rewards?.map((v) => (
        <Board key={v.level}>
          <Row borderColor={{ bottom: 'white' }} justifyContent="center">
            <Span fontSize={TITLE_FONT_SIZE}>{v.level}</Span>
          </Row>
          {v.total === 0 ? (
            <Row justifyContent="center">
              <Span fontSize={CONTENT_FONT_SIZE}>데이터 없음</Span>
            </Row>
          ) : (
            <>
              <Row justifyContent="center" borderColor={{ bottom: 'white' }}>
                {[
                  <Span key={0} fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                    /
                  </Span>,
                  ...Object.keys(v.reward)?.map((v, i) => (
                    <Span
                      key={i + 1}
                      fontSize={CONTENT_FONT_SIZE}
                      width={SPAN_WIDTH}
                    >
                      {v}
                    </Span>
                  )),
                ]}
              </Row>
              <Row justifyContent="center">
                {[
                  <Span key={0} fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                    최소
                  </Span>,
                  ...Object.entries(v.reward)?.map((v, i) => (
                    <Span
                      key={i + 1}
                      fontSize={CONTENT_FONT_SIZE}
                      width={SPAN_WIDTH}
                    >
                      {v[1].min.toLocaleString()}
                    </Span>
                  )),
                ]}
              </Row>
              <Row justifyContent="center">
                {[
                  <Span key={0} fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                    최대
                  </Span>,
                  ...Object.entries(v.reward)?.map((v, i) => (
                    <Span
                      key={i + 1}
                      fontSize={CONTENT_FONT_SIZE}
                      width={SPAN_WIDTH}
                    >
                      {v[1].max.toLocaleString()}
                    </Span>
                  )),
                ]}
              </Row>
              <Row justifyContent="center" borderColor={{ bottom: 'white' }}>
                {[
                  <Span key={0} fontSize={CONTENT_FONT_SIZE} width={SPAN_WIDTH}>
                    평균
                  </Span>,
                  ...Object.entries(v.reward)?.map((v, i) => (
                    <Span
                      key={i + 1}
                      fontSize={CONTENT_FONT_SIZE}
                      width={SPAN_WIDTH}
                    >
                      {Number(v[1].avg.toFixed(0)).toLocaleString()}
                    </Span>
                  )),
                ]}
              </Row>
              <Row justifyContent="center">
                <Span fontSize={CONTENT_FONT_SIZE}>
                  {`수익 (거래가능) : ${v.tradableGoldValue.toLocaleString()}`}
                </Span>
              </Row>
              <Row justifyContent="center">
                <Span
                  fontSize={CONTENT_FONT_SIZE}
                >{`수익 (전체) : ${v.goldValue.toLocaleString()}`}</Span>
              </Row>
            </>
          )}
        </Board>
      ))}
    </Wrapper>
  );
}
