import { NaviButton } from '@/components/commons/buttons/navi-button';
import styled from '@emotion/styled';
import { RewardsPresenterProps } from './interfaces/reward.interface';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryNavi = styled.div`
  display: flex;
  justify-content: center;
`;

const RewardTable = styled.div`
  display: block;
  width: 100vh;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin-bottom: 30px;
`;

const RewardRow1 = styled.div`
  background-color: #323232;
  width: 100vh;
  text-align: center;
  font-size: 30px;
  border-top: 1px inset white;
`;

const RewardRow2 = styled.div`
  background-color: #3c3c3c;
  display: flex;
  width: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-top: 1px inset white;
`;

const RewardSpan = styled.div`
  margin: 5px;
  width: 115px;
  background-color: #3c3c3c;
  text-align: center;
  font-size: 25px;
`;

export default function RewardsPresenter(props: RewardsPresenterProps) {
  return (
    <Wrapper>
      <CategoryNavi>
        {props.categories.map((v) => (
          <NaviButton key={v} onClick={props.onClickCategory(v)}>
            {v}
          </NaviButton>
        ))}
      </CategoryNavi>
      {props.rewards.map((v) => (
        <RewardTable key={v.level}>
          <RewardRow1>{v.level}</RewardRow1>
          {v.total === 0 ? (
            <RewardRow2>
              <RewardSpan>데이터 없음</RewardSpan>
            </RewardRow2>
          ) : (
            <>
              <RewardRow2>
                {[
                  <RewardSpan key={0}>/</RewardSpan>,
                  ...Object.keys(v.reward).map((v, i) => (
                    <RewardSpan key={i + 1}>{v}</RewardSpan>
                  )),
                ]}
              </RewardRow2>
              <RewardRow2>
                {[
                  <RewardSpan key={0}>최소</RewardSpan>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <RewardSpan key={i + 1}>
                      {v[1].min.toLocaleString()}
                    </RewardSpan>
                  )),
                ]}
              </RewardRow2>
              <RewardRow2>
                {[
                  <RewardSpan key={0}>최대</RewardSpan>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <RewardSpan key={i + 1}>
                      {v[1].max.toLocaleString()}
                    </RewardSpan>
                  )),
                ]}
              </RewardRow2>
              <RewardRow2>
                {[
                  <RewardSpan key={0}>평균</RewardSpan>,
                  ...Object.entries(v.reward).map((v, i) => (
                    <RewardSpan key={i + 1}>
                      {Number(v[1].avg.toFixed(0)).toLocaleString()}
                    </RewardSpan>
                  )),
                ]}
              </RewardRow2>
              <RewardRow1>
                {`수익 (거래가능) : ${v.tradableGoldValue.toLocaleString()}`}
              </RewardRow1>
              <RewardRow1>
                {`수익 (전체) : ${v.goldValue.toLocaleString()}`}
              </RewardRow1>
            </>
          )}
        </RewardTable>
      ))}
    </Wrapper>
  );
}
