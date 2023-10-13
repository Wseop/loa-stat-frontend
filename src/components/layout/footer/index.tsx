import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 3px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid white;
  text-align: center;
`;

export default function Footer(): JSX.Element {
  return (
    <Wrapper>
      <div>Copyright @ 2023 loa-stat</div>
      <div>
        이 페이지에는{' '}
        <a href="https://github.com/JellyBrick/SeguFont">세구세구체</a>가
        적용되어있습니다.
      </div>
    </Wrapper>
  );
}
