import styled from '@emotion/styled';
import { RewardsPresenterProps } from './interfaces/reward.interface';
import { MenuButton } from '@/components/commons/button';
import { Span } from '@/components/commons/data';
import { Row } from '@/components/commons/table';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span1 = styled(Span)`
  font-size: 30px;
`;

const Span2 = styled(Span)`
  width: 115px;
  font-size: 25px;
`;

export default function RewardsPresenter(props: RewardsPresenterProps) {
  return (
    <Wrapper>
      <Row>
        {props.categories.map((v) => (
          <MenuButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </MenuButton>
        ))}
      </Row>
      {props.rewards.map((v) => (
        <Row key={v.level}>
          <Row>
            <Span1>{v.level}</Span1>
          </Row>
          {v.total === 0 ? (
            <Row backgroundColor="#323232">
              <Span2>데이터 없음</Span2>
            </Row>
          ) : (
            <>
              <Row>
                {[
                  <Span2 key={0}>/</Span2>,
                  ...Object.keys(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v}</Span2>
                  )),
                ]}
              </Row>
              <Row>
                {[
                  <Span2 key={0}>최소</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v[1].min.toLocaleString()}</Span2>
                  )),
                ]}
              </Row>
              <Row>
                {[
                  <Span2 key={0}>최대</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v[1].max.toLocaleString()}</Span2>
                  )),
                ]}
              </Row>
              <Row>
                {[
                  <Span2 key={0}>평균</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>
                      {Number(v[1].avg.toFixed(0)).toLocaleString()}
                    </Span2>
                  )),
                ]}
              </Row>
              <Row>
                <Span1>
                  {`수익 (거래가능) : ${v.tradableGoldValue.toLocaleString()}`}
                </Span1>
              </Row>
              <Row>
                <Span1>{`수익 (전체) : ${v.goldValue.toLocaleString()}`}</Span1>
              </Row>
            </>
          )}
        </Row>
      ))}
    </Wrapper>
  );
}
