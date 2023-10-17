import styled from '@emotion/styled';
import { RewardsPresenterProps } from './interfaces/reward.interface';
import { MenuButton } from '@/components/commons/button';
import { Area, Row } from '@/components/commons/area';
import { Span } from '@/components/commons/data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span1 = styled(Span)`
  font-size: 30px;
  background-color: #3c3c3c;
`;

const Span2 = styled(Span)`
  width: 115px;
  font-size: 25px;
  background-color: #323232;
`;

export default function RewardsPresenter(props: RewardsPresenterProps) {
  return (
    <Wrapper>
      <Row borderColor="white">
        {props.categories.map((v) => (
          <MenuButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </MenuButton>
        ))}
      </Row>
      {props.rewards.map((v) => (
        <Area key={v.level} borderColor="#ffdc3c">
          <Row backgroundColor="#3c3c3c" borderColor="white">
            <Span1>{v.level}</Span1>
          </Row>
          {v.total === 0 ? (
            <Row backgroundColor="#323232">
              <Span2>데이터 없음</Span2>
            </Row>
          ) : (
            <>
              <Row backgroundColor="#323232" borderColor="white">
                {[
                  <Span2 key={0}>/</Span2>,
                  ...Object.keys(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v}</Span2>
                  )),
                ]}
              </Row>
              <Row backgroundColor="#323232" borderColor="white">
                {[
                  <Span2 key={0}>최소</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v[1].min.toLocaleString()}</Span2>
                  )),
                ]}
              </Row>
              <Row backgroundColor="#323232" borderColor="white">
                {[
                  <Span2 key={0}>최대</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>{v[1].max.toLocaleString()}</Span2>
                  )),
                ]}
              </Row>
              <Row backgroundColor="#323232" borderColor="white">
                {[
                  <Span2 key={0}>평균</Span2>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <Span2 key={i + 1}>
                      {Number(v[1].avg.toFixed(0)).toLocaleString()}
                    </Span2>
                  )),
                ]}
              </Row>
              <Row backgroundColor="#3c3c3c" borderColor="white">
                <Span1>
                  {`수익 (거래가능) : ${v.tradableGoldValue.toLocaleString()}`}
                </Span1>
              </Row>
              <Row backgroundColor="#3c3c3c">
                <Span1>{`수익 (전체) : ${v.goldValue.toLocaleString()}`}</Span1>
              </Row>
            </>
          )}
        </Area>
      ))}
    </Wrapper>
  );
}
